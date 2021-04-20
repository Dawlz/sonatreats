$(function () {
	$('.hero__cta-button').click(function () {
		$('.order-modal').toggleClass('order-modal--hidden');
	});
	$('.order-modal__header__close').click(function () {
		$('.order-modal').addClass('order-modal--hidden');
	});
	$('.creations__quote-button').click(function () {
		$('.order-modal').toggleClass('order-modal--hidden');
	});
	$('.order-modal__header__close').click(function () {
		$('.order-modal').addClass('order-modal--hidden');
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
