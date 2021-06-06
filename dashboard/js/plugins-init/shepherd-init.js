(function($) {
    "use strict"

    const tour = new Shepherd.Tour({
        defaultStepOptions: {
          classes: 'shadow-md bg-purple-dark',
          scrollTo: true
        }
    });

    tour.addStep('nav-header', {
        text: 'This is Navigation Header',
        attachTo: '.nav-header bottom',
        classes: 'example-step-extra-class',
        advanceOn: '.header-right', 
        buttons: [
          {
            text: 'Next',
            action: tour.next
          }
        ]
    });

    tour.addStep('header-right', {
        text: 'This is header right',
        attachTo: '.header-right bottom',
        classes: 'example-step-extra-class',
        buttons: [
          {
            text: 'Next',
            action: tour.next, 
            classes: 'btn btn-primary'
          }
        ]
    });

    tour.addStep('nk-sidebar', {
        text: 'This is left sidebar',
        attachTo: '.nk-sidebar right',
        classes: 'example-step-extra-class',
        buttons: [
          {
            text: 'Next',
            action: tour.next
          }
        ]
    });

    tour.addStep('right-sidebar', {
        text: 'This is left sidebar',
        attachTo: '.sidebar-right-trigger left',
        classes: 'example-step-extra-class',
        buttons: [
          {
            text: 'Next',
            action: tour.next
          }
        ]
    });

    tour.addStep('step 1', {
        text: 'This is step one',
        attachTo: '#step1 top',
        classes: 'example-step-extra-class',
        buttons: [
          {
            text: 'Next',
            action: tour.next
          }
        ]
    });

    tour.addStep('step 2', {
        text: 'This is step two',
        attachTo: '#step2 top',
        classes: 'example-step-extra-class',
        buttons: [
          {
            text: 'Next',
            action: tour.next
          }
        ]
    });

    tour.addStep('step 3', {
        text: 'This is step three',
        attachTo: '#step3 top',
        classes: 'example-step-extra-class',
        buttons: [
          {
            text: 'Next',
            action: tour.next
          }
        ]
    });

    tour.start();



})(jQuery);