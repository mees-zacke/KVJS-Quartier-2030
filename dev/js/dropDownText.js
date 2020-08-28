jQuery(function($) {

    $(document).ready(function(){
        dropDownText();

    })
    function dropDownText() {
        var dropDownElement = $('p').children('.dropDownReadMore');
        if (dropDownElement) {
            $(dropDownElement).parent().append('&nbsp;');
            !$(dropDownElement).parent().nextAll().not('.after').css('display','none');
            $(dropDownElement).on('click touch', function() {
                $(this).parent().nextAll().not('.after').slideToggle( function() {
                    $(this).parent().toggleClass('active');
                });
                $(this).fadeToggle();
                $(this).parent().siblings('.after').slideToggle();
            })
        }

        var closeElement = $('p.after');
        if (closeElement) {
            $(closeElement).on('click touch', function() {
                $(this).slideToggle();
                $(this).siblings().children('.dropDownReadMore').fadeToggle();
                $(this).prevAll().children('.dropDownReadMore').parent().nextAll().not('.after').slideToggle();
                $(this).parent().toggleClass('active');
            })
        }
    }

})