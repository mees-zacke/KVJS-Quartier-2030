//// Funktionalität beim Scrollen ////
var headerHight = $('#header').height();

$(window).scroll(onScroll);
function onScroll (){
    if ($(window).scrollTop() >= headerHight) {
        $('body').addClass('onScroll');
        $('#header .logo-container svg .text').fadeOut(300);
        $('#header .linker-header .mm-opener a >div').slideUp(300);
        $('#header .linker-header .mod_form').slideUp(300);
        $('#header .linker-header .switch').slideUp(300);
        $('#header .linker-header .readspeaker-button').slideUp(300);
        $('#header .linker-header .breadcrumb-container').slideUp(300);
    } else {
        $('body').removeClass('onScroll');
        $('#header .logo-container svg .text').fadeIn(300);
        $('#header .linker-header .mm-opener a >div').slideDown(300);
        $('#header .linker-header .mod_form').slideDown(300);
        $('#header .linker-header .switch').slideDown(300);
        $('#header .linker-header .readspeaker-button').slideDown(300);
        $('#header .linker-header .breadcrumb-container').slideDown(300);
    }
}

// Header Funktionen
$(window).ready(function setHeaderStates() {

    // Höhe des Headers bestimmen
    var resizeTimer;

    $("#kopfbild").css("margin-top", headerHight + "px")

    $(window).resize(function () {
        $("#kopfbild").css("margin-top", $('#header').height() + "px")
    });

// Menü bei Scroll verstecken und wieder anzeigen
    var body = $('body');
    $(window).ready(function () {
        hiddenClass()
    });

    function hiddenClass() {
        var prev = 0;
        var header = $('#header');
        $(window).on('scroll', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(classHidden, 0)
        });

        function classHidden() {
            var scrollTop = $(window).scrollTop();
            header.toggleClass('hidden', scrollTop > prev);
            header.toggleClass('visible', scrollTop < headerHight);
            prev = scrollTop;
        }

    }
});
