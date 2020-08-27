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

function createCode() {
	//创建随机4位数字，math.floor向下取整
	var code = Math.floor(Math.random() * 9000 + 1000);
	//获取元素对象
	var span = document.getElementById("codeSpan");
	//将数字存放到span中
	span.innerHTML = code;
	//给span添加背景图片
}
//校验确认验证码------------------
function checkCode() {
	//获取用户输入验证码
	var code = document.getElementById("code").value;
	//获取随机验证码
	var code2 = document.getElementById("codeSpan").innerHTML;
	//获取span对象
	var span = document.getElementById("codeSpan2");
	//比较前两次密码是否相同
	if (code == "" || code == null) {
		//输入校验结果
		span.innerHTML = "*验证码不能为空";
		span.style.color = "red";
		createCode();
		return false;
	} else if (code == code2) {
		//输入校验结果
		span.innerHTML = "*验证码通过";
		span.style.color = "green";
		return true;
	} else {
		//输入校验结果
		span.innerHTML = "*验证码错误"
		span.style.color = "red";
		createCode();
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
	checkPwd2();
}
//校验确认密码
function checkPwd2() {
	//获取第一次校验密码
	var pwd = document.getElementById("pwd").value;
	//获取确认密码
	var pwd2 = document.getElementById("pwd2").value;
	//获取span对象
	var span = document.getElementById("pwd2Span");
	//比较前两次密码是否相同
	if (pwd2 == "" || pwd2 == null) {
		//输入校验结果
		span.innerHTML = "*密码不能为空";
		span.style.color = "red";
		return false;
	} else if (pwd === pwd2) {
		//输入校验结果
		span.innerHTML = "*密码通过";
		span.style.color = "green";
		return true;
	} else {
		//输入校验结果
		span.innerHTML = "*密码不同，请重新输入"
		span.style.color = "red";
		return false;
	}
}

function checkSub() {
	checkPwd();
	checkPwd2();
	checkPhone();
	checkCode();
	return checkPwd() && checkPwd2() && checkPhone() && checkCode();
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
