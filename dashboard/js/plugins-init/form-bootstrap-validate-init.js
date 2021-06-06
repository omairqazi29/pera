(function($) {
    'use strict';

    $(document).ready(function() {
        $(".bs-submit").click(function() {
      
          //Fetch form to apply custom Bootstrap validation
          var form = $(".needs-validation")
      
          if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.addClass('was-validated');
      
          //Make ajax call here
      
        })
      });

      function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }




    //to confirm input takes only number input
    //use class ".shouldNumber" in your html <input type="text" /> element
    $('.shouldNumber').on('keypress', function() {
        return isNumberKey(event)
    });

  })(jQuery);