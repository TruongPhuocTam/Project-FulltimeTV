jQuery(document).ready(function ($) {
  if ($('.back-to-top').length > 0) {
    $(window).scroll(function () {
      var e = $(window).scrollTop()
      if (e > 200) {
        $('.back-to-top').show()
      } else {
        $('.back-to-top').hide()
      }
    })
    $('.back-to-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      })
    })
  }
})
