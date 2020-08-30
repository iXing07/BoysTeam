// 昵称
$("#ncc").click(function () {
    $(".editNickname").toggleClass("editNicknames");
  });
//   性别
$("#xb").click(function () {
    $(".modifyGender").toggleClass("modifyGenders");
  });
// 简介
  $("#jj").click(function () {
    $(".editProfile").toggleClass("editProfiles");
  });
// 关闭
  $("#editNickname").click(function(){
    $(".editNickname").css("display","none");
  })
  
  $("#editProfile").click(function(){
    $(".editProfile").css("display","none");
  })

  $("#nan").click(function(){
    $(".modifyGender").css("display","none");
  })
  $("#nv").click(function(){
    $(".modifyGender").css("display","none");
  })