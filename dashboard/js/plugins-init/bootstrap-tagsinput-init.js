// !function(t){"use strict";t(document).ready(function(){t(function(){t("#tags_1").tagsInput({width:"auto"}),t("#tags_2").tagsInput({width:"auto",onChange:function(n,a){var i=["php","ruby","javascript"];t(".tag",a).each(function(){t(this).text().search(new RegExp("\\b("+i.join("|")+")\\b"))>=0&&t(this).addClass("tag--yellow")})}})})})}(window.jQuery);
$("#tags_1").tagsinput()
$("#tags_2").tagsinput('items')
$("#tags_3").tagsinput('items')