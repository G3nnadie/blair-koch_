$(document).ready(function () {

  // Scroll speed
  $('.anchor-link').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });

  // Show menu mobail
  $('.navbar-toggle--open').on('click', function () {
    $('.nav').fadeIn(200);
  });

  $('.navbar-toggle--close').on('click', function () {
    $('.nav').fadeOut(200);
  });

  if($(window).width() < 992) {
    $('.nav__link').on('click', function() {
      $('.nav').fadeOut(200);
    })
  }

  // Header add class
  $(window).scroll(function() { 
    var top = $(document).scrollTop();
    if (top > 0) {
      $('.header').addClass('header--fix');
    }
    else {
      $('.header').removeClass('header--fix');
    }
  });

  // Mailto
  $('a[href^=mailto]').addClass('mailto-link');

  var mailto = $('.mailto-link');
  var messageCopy = 'Click to copy email address';
  var messageSuccess = 'Email copied';
  
  mailto.append('<span class="mailto-message"></span>');
  $('.mailto-message').append(messageCopy);
  
  // Disable opening your email client. yuk.
  $('a[href^=mailto]').click(function() {
      return false; 
  })
  
  // On click, get href and remove 'mailto:' from value
  // Store email address in a variable.
  mailto.click(function() {
    var href = $(this).attr('href');
    var email = href.replace('mailto:', '');
    copyToClipboard(email);
    $('.mailto-message').empty().append(messageSuccess);
    setTimeout(function() {
    $('.mailto-message').empty().append(messageCopy);}, 2000); 
  });


  function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    dummy.focus();
  }

  // Copy
  $('.speaker-intro__copy').on('click', function(){
    new ClipboardJS('.speaker-intro__copy');
    $(this).find('.btn-copy-ok').fadeIn(2000);
    $(this).find('.btn-copy-ok').fadeOut(2000);
  });

  $('.biography__btn-copy').on('click', function(){
    new ClipboardJS('.biography__btn-copy');
    $(this).find('.btn-copy-ok').fadeIn(2000);
    $(this).find('.btn-copy-ok').fadeOut(2000);
  });

  $('.textual__btn-copy').on('click', function(){
    new ClipboardJS('.textual__btn-copy');
    $(this).find('.btn-copy-ok').fadeIn(2000);
    $(this).find('.btn-copy-ok').fadeOut(2000);
  });


  // Modal video
  $('.flashy-js').flashy({
    hideClass: 'fx-fadeOut',
    videoAutoPlay: true, 
    overlayClose: true, 
    gallerySwipeMobile:false,
    galleryCounterMessage : '',
    loadError: 'Sorry, an error occured while loading the content...' 
  });

  // Logos sl
  var swiper = new Swiper(".logos", {
    loop: true,
    speed: 5000,
    spaceBetween: 25,
    slidesPerView: 4,
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
      768: {
        speed: 9000,
        spaceBetween: 50,
        slidesPerView: 5,
      },
      1200: {
        speed: 9000,
        spaceBetween: 74,
        slidesPerView: 5,
      },
    },
  });

  // Projects sl
  var swiper = new Swiper(".footer__sl", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});