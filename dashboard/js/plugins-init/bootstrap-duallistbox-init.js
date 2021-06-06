(function($) {
    'use strict'

    $('select[name="duallistbox_demo1[]"]').bootstrapDualListbox();

    $('.demo2').bootstrapDualListbox({
        nonSelectedListLabel: 'Non-selected',
        selectedListLabel: 'Selected',
        preserveSelectionOnMove: 'moved',
        moveOnSelect: false,
        nonSelectedFilter: 'ion ([7-9]|[1][0-2])'
    });

    let demo3 = $('.demo3').bootstrapDualListbox({
        nonSelectedListLabel: 'Non-selected',
        selectedListLabel: 'Selected',
        preserveSelectionOnMove: 'moved',
        moveOnSelect: false,
        nonSelectedFilter: 'ion ([7-9]|[1][0-2])'
    });

    $("#demo3-add").click(function() {
        demo3.append('<option value="apples">Apples</option><option value="oranges" selected>Oranges</option>');
        demo3.bootstrapDualListbox('refresh');
    });
    
    $("#demo3-add-clear").click(function() {
        demo3.append('<option value="apples">Apples</option><option value="oranges" selected>Oranges</option>');
        demo3.bootstrapDualListbox('refresh', true);
    });








})(jQuery);