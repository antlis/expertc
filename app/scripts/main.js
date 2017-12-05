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
   
   $('#modalDownloadForm').validate({
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
   
   // enhance tel-links
   $('a[href^=\'tel:\']').each(function() {
       var target = 'call-' + this.href.replace(/[^a-z0-9]*/gi, '');
       var link = this;
   
       // load in iframe to supress potential errors when protocol is not available
       $('body').append('<iframe name="' + target + '" style="display: none"></iframe>');
       link.target = target;
   
       // replace tel with callto on desktop browsers for skype fallback
       if (!navigator.userAgent.match(/(mobile)/gi)) {
           link.href = link.href.replace(/^tel:/, 'callto:');
       }
   });
   
});