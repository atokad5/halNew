;(function($){
	var isScrolling = false;  
  var navBar = $('.the-navbar');
  var windowScroll = $(window).scrollTop();

 // $.fn.inView = function(){
 //    var win = $(window);
 //    var obj = $(this);
 //    var scrollPosition = win.scrollTop();
 //    var visibleArea = win.scrollTop() + win.height() ;
 //    var objEndPos = (obj.offset().top + obj.outerHeight());
 //    return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
 //  };

  var scrollUpdater = function(){
  	isScrolling = true;
    windowScroll = $(window).scrollTop();
  }



  var myScrollHandler = function(){
  	if(isScrolling){

    if(windowScroll > 45){
      navBar.addClass('show-bg')
    }
    else if(windowScroll < 45){
      navBar.removeClass('show-bg')
    }

    isScrolling = false
  }
  requestAnimationFrame(myScrollHandler);

}
  $(window).on('scroll', scrollUpdater);
  myScrollHandler();


})(jQuery);