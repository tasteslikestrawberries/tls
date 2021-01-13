var menu = document.getElementById('menu');
menu.addEventListener("click", dropdown);

function dropdown() {
   var x = document.getElementsByClassName('dropdown-content')[0];
   document.getElementById("menu").classList.toggle("change");
   
  if (window.getComputedStyle(x).getPropertyValue('display') === 'none') {
    x.style.display = 'block';
    
  } else {
    x.style.display = 'none';
  }
}




$(function () {
  'use strict';

  function DotNav($nav){
    var $dots = $nav.find('li'),
        current = 0;

    $dots.click(function (el) {

      el.preventDefault();
      el.stopPropagation()
      var $dot = $(this),
          idx = $dots.index($dot);

      if( idx !== current ){
        $dots.removeAttr('class');

        setTimeout( function() {
          $dot.addClass('is-current');
          current = idx;
        }, 25 );
      }
    })
  }

  $('.dotstyle').each(function () {
    new DotNav($(this));
  });
});