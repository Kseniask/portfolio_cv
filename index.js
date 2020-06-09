$(function () {
  // $('.bxslider').bxSlider({
  //   displaySlideQty: 3
  //   // moveSlideQty: 1
  // })
  $(window).scroll = function () {
    sticky_nav()
  }
  var navbar = $('.nav')
  var sticky = navbar.offsetTop

  function sticky_nav () {
    if (window.pageYOffset >= sticky) {
      navbar.addClass('sticky')
    } else if (window.pageYOffset <= sticky && navbar.hasClass('sticky')) {
      navbar.removeClass('sticky')
    }
  }

  $('.horiz_scroll').hover(
    function () {
      $(this).css('cursor', 'pointer')
      $('.more').hide()
    },
    function () {
      $('.more').show()
    }
  )
  $('.horiz_scroll').mousewheel(function (e, delta) {
    this.scrollLeft += delta * 20
    e.preventDefault()
  })

  var traits = $('.rectangle')
  $('.trait_text').hide()

  traits.hover(
    function () {
      var desc = $(this).next()
      var dots = $(this).find('.dots')
      desc.show()
      dots.hide()
    },
    function () {
      var desc = $(this).next()
      var dots = $(this).find('.dots')
      dots.show()
      desc.hide()
      //   dots.hide()
    }
  )
  $('.trait_text').hover(
    function () {
      $(this).show()
      $(this).css('margin-top', '-10px')
    },
    function () {
      $(this).hide()
    }
  )
})
