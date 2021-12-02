$(function () {
	let lineCount = 1;
	let nextId = 1;

	$('.hero__cta-button').click(function () {
		$('.request-modal').toggleClass('request-modal--hidden');
		$('body').toggleClass('modal-open');
	});
	$('.request-modal__header__close').click(function () {
		$('.request-modal').addClass('request-modal--hidden');
		$('body').toggleClass('modal-open');
	});

	$('.request-modal__overlay').click(function () {
		$('.request-modal').addClass('request-modal--hidden');
		$('body').toggleClass('modal-open');
	});
	$('.creations__plan-event-button').click(function () {
		$('.request-modal').toggleClass('request-modal--hidden');
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

	$('.order-modal__overlay').click(function () {
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
});
