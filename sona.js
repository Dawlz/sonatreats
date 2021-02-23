$(function() {
    $('#event').hide()
    $('#cakeNmore').hide()
    $('#closeForm').hide()
    $('#order').change(function(){
        orderType = $(this).val()
        if (orderType === "Event") {
            $('#cakeNmore').hide();
            $('#event').show();
            $('#closeForm').show()
        }
        if (orderType === "Cakes and Dessert"){
            $('#event').hide();
            $('#cakeNmore').show()
            $('#closeForm').show()
        }
    })

    $('#closeForm').click(function(){
        $('#event').hide()
        $('#cakeNmore').hide()
        $(this).hide();
    })

    $('.overlay').click(function(){
        $(this).toggleClass('overlayOnOff')
    })

})