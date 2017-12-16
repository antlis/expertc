jQuery(function ($)
{

	// hello@franshiza-klining.ru
	// expertc@mailinator.com
	var email = '//formspree.io/antiantiemail@mailinator.com',
		$orderCallForm = $('#modalOrderCallForm'),
		$downloadForm = $('#modalDownloadForm'),
		$applicationFrom = $('#modalTestDriveForm'),
		$modalDownload = $('#ModalDownload'),
		$modalThanks = $('#ModalThanks'),
		$modalTestDrive = $('#ModalTestDrive'),
		$modalOrderCall = $('#Modal3');

	$('#modalDownloadPhone').mask('+7 (999) 999-9999');
	$('#modalOrderCallPhone').mask('+7 (999) 999-9999');
	$('#modalTestDrivePhone').mask('+7 (999) 999-9999');

	// Stop modal video playback after closing
	$modalTestDrive.on('hidden.bs.modal', function (e)
	{
		$('#ModalTestDrive iframe').removeAttr('src');

		setTimeout(function (e)
		{
			$('#ModalTestDrive iframe').attr('src', 'https://www.youtube.com/embed/Izpm8ONchIc');
		}, 5000);
	});

	// ORDER CALL
	$orderCallForm.submit(function (e)
	{
		e.preventDefault();
		$.ajax(
		{
			url: email,
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function ()
			{
				console.log('Sending order call form...');
			},
			success: function (data)
			{
				$modalOrderCall.modal('hide');
				setTimeout(function ()
				{
					$('#ModalThanksOrderCall').modal('show');
				}, 400);
				setTimeout(function ()
				{
					$('#ModalThanksOrderCall').modal('hide');
				}, 7000);
			},
			error: function (err)
			{
            console.log(err);
			}
		});
	});
	// ORDER CALL

	// DOWNLOAD
	$downloadForm.submit(function (e)
	{
		e.preventDefault();
		$.ajax(
		{
			url: email,
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function () {},
			success: function (data)
			{
				$modalDownload.modal('hide');
				$('.modal-thanks').removeClass('not-show');
				$('.modal-blurred').addClass('blur');
				setTimeout(function ()
				{
					$modalTestDrive.modal('show');
				}, 400);

				var userEmail = $('#modalDownloadEmail').val(),
					userEmailHidden = $('#modalDownloadEmailHidden').val(userEmail).val(),
					userNameHidden = $('#modalDownloadUserName').val( $('#modalDownloadName').val() ).val();
				
				$('#archiveSendForm').submit(function (e)
				{
					e.preventDefault();
					var form_data = $(this).serialize();
					console.log(form_data);
					$.ajax(
					{
						type: 'POST',
						url: '/send.php',
						data: form_data,
						success: function ()
						{
							console.log('Ваше сообщение отпрвлено! ' + form_data);
						}
					});
				}).submit();

			},
			error: function (err)
			{
				console.log(err);
			}
		});
	});
	// DOWNLOAD

	$applicationFrom.submit(function (e)
	{
		e.preventDefault();
		$.ajax(
		{
			url: email,
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function ()
			{
				console.log('Sending application form...');
			},
			success: function (data)
			{
				$modalTestDrive.modal('hide');
				setTimeout(function ()
				{
					$('#ModalThanksApplication').modal('show');
				}, 400);
				setTimeout(function ()
				{
					$('#ModalThanksApplication').modal('hide');
				}, 7000);
			},
			error: function (err)
			{
            console.log(err);
			}
		});
	});

	$('.thanks-close, .btn-video').on('click', function ()
	{
		$('.modal-thanks').addClass('not-show');
		$('.modal-blurred').removeClass('blur');
	});

	$('#modalOrderCallForm').validate();
	$('#modalTestDriveForm').validate();

	// enhance tel-links
	$('a[href^=\'tel:\']').each(function ()
	{
		var target = 'call-' + this.href.replace(/[^a-z0-9]*/gi, '');
		var link = this;

		// load in iframe to supress potential errors when protocol is not available
		$('body').append('<iframe name="' + target + '" style="display: none"></iframe>');
		link.target = target;

		// replace tel with callto on desktop browsers for skype fallback
		if (!navigator.userAgent.match(/(mobile)/gi))
		{
			link.href = link.href.replace(/^tel:/, 'callto:');
		}
	});

});