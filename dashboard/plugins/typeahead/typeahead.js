// vendor
var xtend = require('xtend');
var dom = require('dom');

var defaults = {
    source: [],
    items: 8,
    menu: '<ul class="typeahead hidden"></ul>',
    item: '<li><a href="#"></a></li>',
    minLength: 1,
    autoselect: true
}

var Typeahead = function (element, options) {
    if (!(this instanceof Typeahead)) {
        return new Typeahead(element, options);
    }

    var self = this;

    self.element = dom(element);
    self.options = xtend({}, defaults, options);
    self.matcher = self.options.matcher || self.matcher
    self.sorter = self.options.sorter || self.sorter
    self.highlighter = self.options.highlighter || self.highlighter
    self.updater = self.options.updater || self.updater
    self.menu = dom(self.options.menu);
    dom(document.body).append(self.menu);

    self.source = self.options.source;
    self.shown = false;
    self.listen();
}

// for minification
var proto = Typeahead.prototype;

proto.constructor = Typeahead;

// select the current item
proto.select = function() {
    var self = this;
    var val = self.menu.find('.active').attr('data-value');

    self.element
      .value(self.updater(val))
      .emit('change');

    return self.hide();
}

proto.updater = function (item) {
    return item;
}

// show the popup menu
proto.show = function () {
    var self = this;

    var offset = self.element.offset();
    var pos = xtend({}, offset, {
        height: self.element.outerHeight()
    })

    var scroll = 0
    var parent = self.element[0]
    while (parent = parent.parentElement) {
        // prevent adding window scroll
        var tag = parent.tagName.toLowerCase();
        if (tag === 'html' || tag === 'body') {
            continue;
        }
        
        scroll += parent.scrollTop
    }

    // if page has scrolled we need real position in viewport
    var top = pos.top + pos.height - scroll + 'px'
    var bottom = 'auto'
    var left = pos.left + 'px'

    if (self.options.position === 'above') {
        top = 'auto'
        bottom = document.body.clientHeight - pos.top + 3
    } else if (self.options.position === 'right') {
        top = parseInt(top.split('px')[0], 10) - self.element.outerHeight() + 'px'
        left = parseInt(left.split('px')[0], 10) + self.element.outerWidth() + 'px'
    }

    self.menu.css({
        top: top,
        bottom: bottom,
        left: left
    });

    self.menu.removeClass('hidden');
    self.shown = true;
    return self;
}

// hide the popup menu
proto.hide = function () {
    this.menu.addClass('hidden');
    this.shown = false;
    return this;
}

proto.lookup = function (event) {
    var self = this;

    self.query = self.element.value();

    if (!self.query || self.query.length < self.options.minLength) {
        return self.shown ? self.hide() : self
    }

    if (self.source instanceof Function) {
        self.source(self.query, self.process.bind(self));
    }
    else {
        self.process(self.source);
    }

    return self;
}

proto.process = function (items) {
    var self = this;

    items = items.filter(self.matcher.bind(self));
    items = self.sorter(items)

    if (!items.length) {
      return self.shown ? self.hide() : self
    }

    return self.render(items.slice(0, self.options.items)).show()
}

proto.matcher = function (item) {
  return ~item.toLowerCase().indexOf(this.query.toLowerCase())
}

proto.sorter = function (items) {
    var beginswith = [];
    var caseSensitive = [];
    var caseInsensitive = [];
    var item;

    while (item = items.shift()) {
      if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
      else if (~item.indexOf(this.query)) caseSensitive.push(item)
      else caseInsensitive.push(item)
    }

    return beginswith.concat(caseSensitive, caseInsensitive)
}

proto.highlighter = function (item) {
    var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
    return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
    })
}

proto.render = function (items) {
    var self = this;

    items = items.map(function (item) {
        var li = dom(self.options.item);
        li.attr('data-value', item)
          .find('a').html(self.highlighter(item));
        return li;
    })

    self.options.autoselect && items[0].addClass('active');

    self.menu.empty();
    items.forEach(function(item) {
        self.menu.append(item);
    });

    return this;
}

proto.next = function (event) {
    var active = this.menu.find('.active').removeClass('active');
    var next = active.next();

    if (!next.length) {
        next = this.menu.find('li').first();
    }

    next.addClass('active');
}

proto.prev = function (event) {
    var active = this.menu.find('.active').removeClass('active');
    var prev = active.prev();

    if (!prev.length) {
        prev = this.menu.find('li').last();
    }

    prev.addClass('active');
}

proto.listen = function () {
    var self = this;

    self.element
      .on('blur', self.blur.bind(self))
      .on('keypress', self.keypress.bind(self))
      .on('keyup', self.keyup.bind(self))
      .on('keydown', self.keydown.bind(self))

    self.menu
      .on('click', self.click.bind(self))
      .on('mouseenter', 'li', self.mouseenter.bind(self))
}

proto.move = function (e) {
    if (!this.shown) return

    switch(e.keyCode) {
    case 9: // tab
    case 13: // enter
    case 27: // escape
        e.preventDefault()
        break

    case 38: // up arrow
        e.preventDefault()
        this.prev()
        break

    case 40: // down arrow
        e.preventDefault()
        this.next()
        break
    }

    e.stopPropagation()
}

proto.keydown = function (e) {
    this.suppressKeyPressRepeat = [40,38,9,13,27].indexOf(e.keyCode) >= 0
    this.move(e)
}

proto.keypress = function (e) {
    if (this.suppressKeyPressRepeat) return
    this.move(e)
}

proto.keyup = function (e) {
    var self = this;

    switch(e.keyCode) {
    case 40: // down arrow
    case 38: // up arrow
            break

    case 9: // tab
    case 13: // enter
        if (!self.shown) return
        self.select()
        break

    case 27: // escape
        if (!self.shown) return
        self.hide()
        break

    default:
        self.lookup()
    }

    e.stopPropagation()
    e.preventDefault()
}

proto.blur = function (e) {
    var self = this;
    setTimeout(function () { self.hide() }, 150);
}

proto.click = function (e) {
    e.stopPropagation();
    e.preventDefault();
    this.select();
}

proto.mouseenter = function (e) {
    this.menu.find('.active').removeClass('active');
    dom(e.currentTarget).addClass('active');
}

module.exports = Typeahead;
