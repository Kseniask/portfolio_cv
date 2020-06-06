$(function () {
  var traits = $('.rectangle')
  $('.trait_text').hide()

  traits.hover(
    function () {
      var desc = $(this).next()
      var dots = $(this).find('.dots')
      console.log(desc)
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
})
