(function($) {
    "use strict"

    $('.dropify-default .dropify').dropify();

    $('.dropify-message .dropify').dropify({
        messages: {
            'default': 'Drag and drop a file here or click',
            'replace': 'Drag and drop or click to replace',
            'remove':  'Remove',
            'error':   'Ooops, something wrong happended.'
        }
    });

    $('.dropify-error .dropify').dropify({
        error: {
            'fileSize': 'The file size is too big ({{ value }} max).',
            'minWidth': 'The image width is too small ({{ value }}}px min).',
            'maxWidth': 'The image width is too big ({{ value }}}px max).',
            'minHeight': 'The image height is too small ({{ value }}}px min).',
            'maxHeight': 'The image height is too big ({{ value }}px max).',
            'imageFormat': 'The image format is not allowed ({{ value }} only).'
        }
    });




})(jQuery);