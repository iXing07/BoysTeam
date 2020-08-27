//校验手机号
function checkPhone() {
	var uphone = document.getElementById("phone").value;
	var peg = /^1[3456789]\d{9}$/;
	var span = document.getElementById("phoneSpan");
	if (span == "" || span == null) {
		//输入校验结果
		span.innerHTML = "*手机号码不能为空";
		span.style.color = "red";
		return false;
	} else if (peg.test(uphone)) {
		//输入校验结果
		span.innerHTML = "*手机号码通过";
		span.style.color = "green";
		return true;
	} else {
		//输入校验结果
		span.innerHTML = "*手机号码格式不符合"
		span.style.color = "red";
		return false;
	}
}

//验证密码
function checkPwd() {
	//获取用户获得用户名信息
	var upwd = document.getElementById("pwd").value;
	//创建校验规则,密码要求6-8位，首位为字母，后面5-7位是数字
	var reg = /^[a-z]\w{5,7}$/;
	//获取span对象
	var span = document.getElementById("pwdSpan");
	//开始交验
	if (span == "" || span == null) {
		//输入校验结果
		span.innerHTML = "*密码不能为空";
		span.style.color = "red";
		return false;
	} else if (reg.test(upwd)) {
		//输入校验结果
		// span.style.display="block"
		span.innerHTML = "*密码通过";
		span.style.color = "green";
		return true;
	} else {
		//输入校验结果
		span.innerHTML = "*密码格式不符"
		span.style.color = "red";
		return false;
	}

}
//校验是否同意公司协议
function checkAgree() {
	//							//获取提交按钮的disable属性,选中框后disabled的值为1.
	//							alert(document.getElementById("sub").disabled);
	document.getElementById("sub").disabled = !document.getElementById("agree").checked;
}

function checkSub() {
	checkPhone();
	checkPwd();
	return checkPwd() && checkPhone() ;
}
//封装校验：相同的保留，不同的传参
function checkField(id, reg) {
	//获取用户数据
	var inp = document.getElementById(id);
	var va = inp.value;
	var alt = inp.alt;
	//创建校验规则
	//获取span对象
	var span = document.getElementById(id + "Span");
	//开始校验
	if (va == "" || va == null) {
		//输入校验结果
		span.innerHTML = "*" + alt + "不能为空";
		span.style.color = "red";
		return false;
	} else if (reg.test(va)) {
		//输入校验结果
		span.innerHTML = "*" + alt + "通过";
		span.style.color = "green";
		return true;
	} else {
		//输入校验结果
		span.innerHTML = "*" + alt + "格式不符";
		span.style.color = "red";
		return false;
	}
}
