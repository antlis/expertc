jQuery(function($){
   
   // hello@franshiza-klining.ru
   var email = '//formspree.io/hello@franshiza-klining.ru',
       $orderCallForm = $('#modalOrderCallForm'),
       $downloadForm = $('#modalDownloadForm'),
       $applicationFrom = $('#modalTestDriveForm'),
       $modalDownload  = $('#ModalDownload'),
       $modalThanks    = $('#ModalThanks'),
       $modalTestDrive = $('#ModalTestDrive'),
       $modalOrderCall = $('#Modal3');
       
   $('#modalDownloadPhone').mask('+7 (999) 999-9999');
   $('#modalOrderCallPhone').mask('+7 (999) 999-9999');
   $('#modalTestDrivePhone').mask('+7 (999) 999-9999');
   
   $orderCallForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: email,
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			console.log('Sending order call form...');
		},
		success: function(data) {
         $modalOrderCall.modal('hide');
         setTimeout(function() {
            $('#ModalThanksOrderCall').modal('show');
         }, 400);
         setTimeout(function() {
            $('#ModalThanksOrderCall').modal('hide');
         }, 7000);
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ошибка.</div>');
   		}
   	});
   });
   
   $downloadForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: email,
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			console.log('Sending order call form...');
		},
		success: function(data) {
			$modalDownload.modal('hide');
         $('.modal-thanks').removeClass('not-show');
         $('.modal-blurred').addClass('blur');
         setTimeout(function() {
            $modalTestDrive.modal('show');
         }, 400);
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ошибка.</div>');
   		}
   	});
   });
   
   $applicationFrom.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: email,
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			console.log('Sending application form...');
		},
		success: function(data) {
			$modalTestDrive.modal('hide');
			setTimeout(function() {
            $('#ModalThanksApplication').modal('show');
         }, 400);
         setTimeout(function() {
            $('#ModalThanksApplication').modal('hide');
         }, 7000);
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ошибка.</div>');
   		}
   	});
   });
   
   $('.thanks-close, .btn-video').on('click', function() {
      $('.modal-thanks').addClass('not-show');
      $('.modal-blurred').removeClass('blur');
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