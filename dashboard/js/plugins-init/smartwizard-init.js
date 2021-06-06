(function($) {
    "use strict"

    //smartwizard1 initialization

    // Step show event
    $("#smartwizard1").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
        //alert("You are on step "+stepNumber+" now");
        if(stepPosition === 'first'){
            $("#prev-btn").addClass('disabled');
        }else if(stepPosition === 'final'){
            $("#next-btn").addClass('disabled');
        }else{
            $("#prev-btn").removeClass('disabled');
            $("#next-btn").removeClass('disabled');
        }
    });

    // Toolbar extra buttons
    var btnFinish = $('<button></button>').text('Finish').addClass('btn btn-info').on('click', function(){
         alert('Thanks for submiting!'); 
    });
    var btnCancel = $('<button></button>').text('Cancel').addClass('btn btn-danger').on('click', function(){
         $('#smartwizard1').smartWizard("reset"); 
    });

    // Smart Wizard
    $('#smartwizard1').smartWizard({
        selected: 0,
        theme: 'circles',
        transitionEffect:'fade',
        showStepURLhash: true,
        toolbarSettings: {
            toolbarButtonPosition: 'end',
            toolbarExtraButtons: [btnFinish, btnCancel]
        }
    });

    // External Button Events
    $("#reset-btn").on("click", function() {
        // Reset wizard
        $('#smartwizard1').smartWizard("reset");
        return true;
    });

    $("#prev-btn").on("click", function() {
        // Navigate previous
        $('#smartwizard1').smartWizard("prev");
        return true;
    });

    $("#next-btn").on("click", function() {
        // Navigate next
        $('#smartwizard1').smartWizard("next");
        return true;
    });

    $("#theme_selector").on("change", function() {
        // Change theme
        $('#smartwizard1').smartWizard("theme", $(this).val());
        return true;
    });

    // Set selected theme on page refresh
    $("#theme_selector").change();





})(jQuery);