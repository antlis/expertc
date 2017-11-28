jQuery(function($){
   
   $('#modalDownloadPhone').mask('+7 (999) 999-9999');
   $('#modalOrderCallPhone').mask('+7 (999) 999-9999');
   $('#modalTestDrivePhone').mask('+7 (999) 999-9999');
   
   var $modalDownload  = $('#ModalDownload'),
       $modalThanks    = $('#ModalThanks'),
       $modalTestDrive = $('#ModalTestDrive');
   
   // $('#modalDownloadForm').on('submit', function() {
   //    if( $('#modalDownloadName').val() && $('#modalDownloadPhone').val() ) {
   //       $modalDownload.modal('hide');
   //       $('.modal-thanks').removeClass('not-show');
   //       $('.modal-blurred').addClass('blur');
   //       // $('#modalDownloadForm').submit();
   //       setTimeout(function() {
   //          $modalTestDrive.modal('show');
   //       }, 350);
   //    }
   // });
   
   $('.thanks-close, .btn-video').on('click', function() {
      $('.modal-thanks').addClass('not-show');
      $('.modal-blurred').removeClass('blur');
   });
   
   $("#modalDownloadForm").validate({
      submitHandler: function(form) {
         $modalDownload.modal('hide');
         $('.modal-thanks').removeClass('not-show');
         $('.modal-blurred').addClass('blur');
         setTimeout(function() {
            $modalTestDrive.modal('show');
         }, 350);
         // $(form).submit();
      }
   });
   $('#modalOrderCallForm').validate();
   $('#modalTestDriveForm').validate();
   
});