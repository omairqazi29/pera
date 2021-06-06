(function($) {
    "use strict"

    // dragula([$('left-defaults'), $('right-defaults')]);
    dragula([document.getElementById('left-defaults'), document.getElementById('right-defaults')])


    dragula([document.getElementById('left-events'), document.getElementById('right-events')])
        .on('drag', function (el) {
            el.className = el.className.replace('ex-moved', '');
        })
        .on('drop', function (el) {
            el.className += ' ex-moved';
        })
        .on('over', function (el, container) {
            container.className += ' ex-over';
        })
        .on('out', function (el, container) {
            container.className = container.className.replace('ex-over', '');
        });
       

    dragula([document.getElementById('left-rm-spill'), document.getElementById('right-rm-spill')], { removeOnSpill: true });


    dragula([document.getElementById('left-copy'), document.getElementById('right-copy')], {
        copy: true
    });


    dragula([document.getElementById('left-copy-1tomany'), document.getElementById('right-copy-1tomany')], {
        copy: function (el, source) {
          return source === document.getElementById('left-copy-1tomany')
        },
        accepts: function (el, target) {
          return target !== document.getElementById('left-copy-1tomany')
        }
    });

    dragula([document.getElementById("left-lovehandles"), document.getElementById("right-lovehandles")], {
        moves: function (el, container, handle) {
          return handle.classList.contains('handle');
        }
    });



})(jQuery);