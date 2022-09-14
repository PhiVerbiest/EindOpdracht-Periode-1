$(document).ready(function () {
  var docEl = $(document),
    headerEl = $('#header'),
    headerWrapEl = $('.wrapHead'),
    navEl = $('nav'),
    linkScroll = $('.scroll');

  docEl.on('scroll', function () {
    if (docEl.scrollTop() > 60) {
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
    }
  });

  linkScroll.click(function (e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);