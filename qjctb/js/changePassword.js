$("#modification").click(function () {
  $(".modifySuccessfully").toggleClass("modifySuccessfullys");
});

// 验证码
$(".captcha").click(function () {
  $(".captcha").hide()
  $(".num").show()
  var second = 60
  $(".num").text((second) + "秒")
  var interval = setInterval(function () {
      second--
      $(".num").text((second) + "秒")
      if (second === -1) {
          $(".captcha").text("重发验证码")
          clearInterval(interval)
          $(".num").hide()
          $(".captcha").show()
      }
  }, 1000)
})
// 修改


