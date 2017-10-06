;(function($){
  var modalTrigger = $('.has-modal');
  var theModal = $('.the-modal');
  var contactForm = $('.is-showing-form');
  var closeModal = $('.md-close');
  var modalShowing = false;


  var initModal = function(e){
    if(!modalShowing){
      e.preventDefault();
      $('body').css({
        position: 'relative',
        overflow: 'hidden'
      })
      theModal.addClass('is-showing');
  
      setTimeout(function(){
        theModal.addClass('is-set-height');
      }, 330)
  
      contactForm.addClass('is-contact-showing');
      console.log(modalShowing);
      modalShowing = true;
    }
    else if(modalShowing){
      $('body').css({
        overflow: 'scroll'
      })
  
      theModal.removeClass('is-showing');
      setTimeout(function(){
        theModal.removeClass('is-set-height');
      }, 0)
      contactForm.removeClass('is-contact-showing');

      modalShowing = false;
    }
  }

  modalTrigger.on('click', initModal)

  

})(jQuery);