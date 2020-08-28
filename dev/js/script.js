jQuery(function ($) {

  $(document).ready(function () {
    isIE();
  });

  /* https://jsfiddle.net/alvaroAV/svvz7tkn/ */
  function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    return is_ie;
  }
  /* Create an alert to show if the browser is IE or not */
  if (isIE()){
    alert('Ihr Browser wird nicht mehr Unterstützt. Bitte verwenden Sie einen Neuen. Zum Beispiel: Microsoft Edge, Google Chrome oder Mozilla Firefox');
  }

  /* rechte Spalte zum rausziehen im mobilen */

  $(document).ready(function(){
    if ($('#right')){
      $('#right').prepend('<div class="sidebar-opener"></div>')
    }

    $('#right .sidebar-opener').on( 'click' , function close() {
        $('#right').toggleClass('open');
      })
  });

  /* bewegen von inhalten der Eventansicht in die Rechte Spalte */

  $(function moveToRight (){
    $('.move-to-right').appendTo($('#right .inside'));
  });







////////////////////////////////////////////////////////////
});