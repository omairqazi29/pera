(function($) {
    "use strict"

    //date picker classic default
    $('.datepicker-default').pickadate();

    //sting sort
    $('.datepicker-string-sort').pickadate({
        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        showMonthsShort: true
    });

    //change button text
    $('.datepicker-button-text').pickadate({
        today: '',
        clear: 'Clear selection',
        close: 'Cancel'
    });

    //change accessibility labels
    $('.datepicker-acc-labels').pickadate({
        labelMonthNext: 'Go to the next month',
        labelMonthPrev: 'Go to the previous month',
        labelMonthSelect: 'Pick a month from the dropdown',
        labelYearSelect: 'Pick a year from the dropdown',
        selectMonths: true,
        selectYears: true
    });

    //default translation
    $('.datepicker-default-translation').pickadate({
        monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        today: 'aujourd\'hui',
        clear: 'effacer',
        formatSubmit: 'yyyy/mm/dd'
    });

    //default formation
    $('.datepicker-default-formats').pickadate({
        // Escape any “rule” characters with an exclamation mark (!).
        format: 'You selecte!d: dddd, dd mmm, yyyy',
        formatSubmit: 'yyyy/mm/dd',
        hiddenPrefix: 'prefix__',
        hiddenSuffix: '__suffix'
    });

    //prefilled value
    $('.datepicker-default-pre-value').pickadate();

    //editable input
    $('.datepicker-default-editable-input').pickadate({
        editable: true
    });

    //select option
    $('.datepicker-default-select-option').pickadate({
        selectYears: true,
        selectMonths: true
    });

    //select option
    $('.datepicker-default-select-year').pickadate({
        selectYears: 4
    });

    //select option
    $('.datepicker-default-date-limits').pickadate({
        min: new Date(2015,3,20), max: new Date(2015,7,14)
    });

    //classic styles
    $('.datepicker-classic').pickadate();


})(jQuery);