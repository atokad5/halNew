;(function($){
  console.log('hi')
  var txtContainer = $('.has-container-text');
  var hiddenTxt = $('.is-hidden-text');
  var whiteBg = $('.is-white-back');
  var heroSpacer = $('.hero-spacer');
  var socialLinks = $('.social-link-hero .fa');



  

  // Handles my text loading in
  var myTextLoadIn = function(){
    txtContainer.each(function(index){
      var t = $(this);
      setTimeout(function(){
        t.addClass('is--text')
      }, 420 * index)
    })

    setTimeout(function(){
      whiteBg.addClass('is-avail')
    }, 820)


    setTimeout(function(){
      heroSpacer.addClass('is-avail')
    }, 700)

    setTimeout(function(){
      socialLinks.each(function(index){

        var ss = $(this)
        setTimeout(function(){
          ss.addClass('is-loaded')
        }, 200 * index)
      })

    }, 1200)

  


  }

  $(window).on('load', function(){
    myTextLoadIn();

  });


  


})(jQuery);
