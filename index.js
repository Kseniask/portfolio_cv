$(function () {
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
  $('.trait_desc').hover(
    function () {
      $(this).show()
      $(this).css('margin-top', '-10px')
    },
    function () {
      $(this).hide()
    }
  )
  animateIntro()

  var i = 0
  var txt = ' have fun.' /* The text */
  var speed = 100 /* The speed/duration of the effect in milliseconds */

  $(window).scroll(function () {
    animateVisibile('.navbar', animateIntro)
    animateVisibile('.proj_content', function () {
      TweenMax.staggerFromTo(
        '.projl',
        0.7,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1 },
        0.2
      )
      TweenMax.staggerFromTo(
        '.projr',
        0.7,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1 },
        0.2
      )
    })
    animateVisibile('.abme', function () {
      TweenMax.fromTo('.abme', 0.7, { scale: 0 }, { scale: 1 })
    })

    animateVisibile('.skill_pic', function () {
      TweenMax.staggerFromTo(
        '.skill_pic',
        0.3,
        { scale: 0.3 },
        { scale: 1 },
        0.2
      )
    })
    if ($('.typing').visible(true)) {
      if (!$('.typing').hasClass('shown')) {
        setTimeout(typeWriter, 1000)
        $('.typing').addClass('shown')
      }
    } else {
      $('.typing').removeClass('shown')
      txt = ' have fun.'
      $('.typing').text('')
    }
  })

  $('.project').hover(
    function () {
      TweenMax.to($(this), 0.3, { scale: 1.2 })
      // TweenMax.to($(this).children(0), 0.3, { opacity: 0.3 })
      TweenMax.to(
        $(this)
          .children()
          .children(),
        0.3,
        { opacity: 1 }
      )
    },
    function () {
      TweenMax.to($(this), 0.3, { scale: 1 })
      TweenMax.to($(this).children(0), 0.3, { opacity: 1 })
      TweenMax.to(
        $(this)
          .children()
          .children(),
        0.3,
        { opacity: 0 }
      )
    }
  )
  function animateVisibile (el, func) {
    if ($(el).visible(true)) {
      if (!$(el).hasClass('shown')) {
        func()
        $(el).addClass('shown')
      }
    } else {
      $(el).removeClass('shown')
    }
  }

  function animateIntro () {
    TweenMax.staggerFromTo(
      '.nav-item',
      0.5,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1 },
      0.2
    )

    TweenMax.staggerFromTo(
      '.navbar-brand',
      0.5,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1 },
      0.2
    )
    TweenMax.staggerFromTo(
      '.jobtitle',
      0.5,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, delay: 1 },
      0.2
    )
  }

  function typeWriter () {
    if (i < txt.length) {
      $('.typing').append(txt.charAt(i))
      i++
      setTimeout(typeWriter, speed)
    } else {
      if (txt != '' && txt != ' work hard.') {
        if (i > 0) {
          txt = txt.slice(0, -1)
          $('.typing').text(txt)
          i--
          setTimeout(typeWriter, speed)
        }
      } else if (txt != ' work hard.') {
        txt = ' work hard.'
        return typeWriter()
      } else {
        return
      }

      //
    }
  }
})
