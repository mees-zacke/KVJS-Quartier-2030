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
      $('#right').prepend('<div class="sidebar-opener"><svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 416">\n' +
          '  <title>sidebar</title>\n' +
          '  <path d="M0,32V448H480V32ZM288,416H32V64H288Zm160,0H320V64H448Z" transform="translate(0 -32)"/>\n' +
          '  <rect x="352" y="192" width="64" height="32"/>\n' +
          '  <rect x="352" y="128" width="64" height="32"/>\n' +
          '  <rect x="352" y="64" width="64" height="32"/>\n' +
          '</svg>\n</div>')
    }

    $('#right .sidebar-opener').on( 'click' , function open() {
        $('#right').toggleClass('open');
      })
  });

  $(document).click(function(e){
    if (!$(e.target).is("#right")
        && $(e.target).parents("#right").length === 0) {
      $('#right').removeClass('open');
    }
  });

  /* bewegen von inhalten der Eventansicht in die Rechte Spalte */

  $(function moveToRight (){
    $('.move-to-right').appendTo($('#right .inside'));
  });

// Autocomplete

  $(function() {
    $( "#header .linker-header #ctrl_2" ).autocomplete({
      source: 'files/layout/php/live_search.php',
      minLength: 2,
      contentType: "application/json; charset=utf-8",
      select: function(event, ui) {
        if(ui.item){
          $(event.target).val(ui.item.value);
        }
        $(event.target.form).submit();
      }

    });
  });

// Readspeaker Button

  $('.readspeaker-button').on('click keypress touch', function(){
    console.log('hey');
    $('.readspeaker-container').fadeToggle();
  });


////////////////////////////////////////////////////////////
});