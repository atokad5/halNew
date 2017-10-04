;(function($){
  var navTrigger = $('.nav-trigger');
  var theMenu = $('.the-menu');
  var liItemsLi = $('.menu-item');
  var liShowing = false;


  var myNavInit = function(){
    if(!liShowing){
      $('.the-menu').slideToggle('fast');
      $(this).toggleClass('is-toggled-nav')
      theMenu.toggleClass('is-active-menu')

      liItemsLi.each(function(index){
          var t = $(this);



        setTimeout(function(){
          setTimeout(function(){
            t.toggleClass('is-triggered-li')
          }, 100 * index)
        }, 500)


      })
      liShowing = true;
    }
    else if (liShowing) {
      $('.the-menu').css({display: 'none'});
      $(this).toggleClass('is-toggled-nav')
      theMenu.toggleClass('is-active-menu')

      liItemsLi.each(function(index){
          var t = $(this);




          setTimeout(function(){
            t.toggleClass('is-triggered-li')
          }, 0 * index)



      })

      liShowing = false;
    }
  }



  $('.design-grid').flickity({
    cellAlign: 'left',
    wrapAround: true
  });

  navTrigger.on('click', myNavInit)
})(jQuery);
