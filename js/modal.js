;(function($){
  var modalTrigger = $('.has-modal');
  var theModal = $('.the-modal');
  var contactForm = $('.is-showing-form');


  var modalInit = function(e){
    e.preventDefault();
    $('body').css({
      position: 'relative',
      overflow: 'hidden'
    })
    console.log('click')
    theModal.addClass('is-showing');

    setTimeout(function(){
      theModal.addClass('is-set-height');
    }, 330)

    contactForm.addClass('is-contact-showing');
  }

  modalTrigger.on('click', modalInit);
})(jQuery);