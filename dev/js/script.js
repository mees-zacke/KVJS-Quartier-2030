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

  /* Farbwechsler */

  $(document).ready(function() {

    var $bodyColor,
        body = $('body');

    // Wenn der localStorage nicht leer ist -> Farbe Abfragen und dementsprechen einfärben
    if(localStorage.getItem('Farbe') == null){
      body.addClass('normal');
      localStorage.setItem('Farbe','normal');
    }
    else if(localStorage.getItem('Farbe') !== null){
      $bodyColor = localStorage.getItem('Farbe');

      // Funktion für den Farbwechsel
      function switchClass(color1,color2) {
        body.removeClass(color1);
        body.removeClass(color2);
        body.addClass($bodyColor);
        return $bodyColor;
      }

      if($bodyColor === 'normal') {
        switchClass(
            'white',
            'black'
        );
      }
      else if($bodyColor === 'white') {
        switchClass(
            'normal',
            'black'
        );
      }
      else if($bodyColor === 'black') {
        switchClass(
            'white',
            'normal'
        );
      }
    }

    $('.colorSwitch').on('click touch', function() {
      if (body.hasClass('normal')) {
        localStorage.setItem('Farbe','white');
        $bodyColor = localStorage.getItem('Farbe');
        body.removeClass('normal');
        body.addClass($bodyColor);
      }
      else if (body.hasClass('white')) {
        localStorage.setItem('Farbe','black');
        $bodyColor = localStorage.getItem('Farbe');
        body.removeClass('white');
        body.addClass($bodyColor);
      }
      else if (body.hasClass('black')) {
        localStorage.setItem('Farbe','normal');
        $bodyColor = localStorage.getItem('Farbe');
        body.removeClass('black');
        body.addClass($bodyColor);
      }
    });

  });






////////////////////////////////////////////////////////////
});