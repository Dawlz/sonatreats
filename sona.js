$(function () {
	let lineCount = 1;
	let nextId = 1;

	$('.hero__cta-button').click(function () {
		$('.order-modal').toggleClass('order-modal--hidden');
		$('body').toggleClass('modal-open');
	});
	$('.order-modal__header__close').click(function () {
		$('.order-modal').addClass('order-modal--hidden');
		$('body').toggleClass('modal-open');
	});
	$('.creations__quote-button').click(function () {
		$('.order-modal').toggleClass('order-modal--hidden');
		$('body').toggleClass('modal-open');
	});
	$('.order-modal__header__close').click(function () {
		$('.order-modal').addClass('order-modal--hidden');
		$('body').toggleClass('modal-open');
	});

	$('.add-line').click(function (e) {
		e.preventDefault();

		$('.line-item').first().clone().prop('id', `line-${nextId}`).appendTo('.order-modal__item-selection');
		$('.order-modal__item-selection').append($('.add-line'));
		lineCount++;
		nextId++;
	});

	$(document).on('click', '.line-item__remove', function (e) {
		e.preventDefault();

		if (lineCount > 1) {
			const lineId = $(this).parent().prop('id');
			$(`.line-item#${lineId}`).remove();

			lineCount--;
		}
	});

	// $('#event').hide();
	// $('#cakeNmore').hide();
	// $('#closeForm').hide();
	// $('#order').change(function () {
	// 	orderType = $(this).val();
	// 	if (orderType === 'Event') {
	// 		$('#cakeNmore').hide();
	// 		$('#event').show();
	// 		$('#closeForm').show();
	// 	}
	// 	if (orderType === 'Cakes and Dessert') {
	// 		$('#event').hide();
	// 		$('#cakeNmore').show();
	// 		$('#closeForm').show();
	// 	}
	// });

	// $('#closeForm').click(function () {
	// 	$('#event').hide();
	// 	$('#cakeNmore').hide();
	// 	$(this).hide();
	// });

	// $('.overlay').click(function(){
	//     $(this).toggleClass('overlayOnOff')
	// })
});
