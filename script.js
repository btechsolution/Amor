function check() {
    if (document.forms[0].elements[0].checked &&
        document.forms[0].elements[1].checked &&
        document.forms[0].elements[2].checked) {
        
        if (!$('.wrapper').hasClass('throb')) {
            $('.wrapper').addClass('throb');
        }
    } else {
        if ($('.wrapper').hasClass('throb')) {
            $('.wrapper').removeClass('throb');
        }
    }
}
