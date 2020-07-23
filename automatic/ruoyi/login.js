
/*$(function() {
    validateRule();
	$('.imgcode').click(function() {
		var url = ctx + "captcha/captchaImage?type=" + captchaType + "&s=" + Math.random();
		$(".imgcode").attr("src", url);
	});
});*/
/*$.validator.setDefaults({
    submitHandler: function() {
		login();
    }
});*/
$("#btnSubmit").click(function(){
	login();
});
function login() {
	/*$.modal.loading($("#btnSubmit").data("loading"));*/
	var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
 /*   var validateCode = $("input[name='validateCode']").val();*/
  /*  var rememberMe = $("input[name='rememberme']").is(':checked');*/
    $.ajax({
        type: "post",
        url: "http://localhost:8888/LoginForm/loginFind",
        data: {
            "loginname": username,
            "password": password,
            /*"validateCode" : validateCode,*/
            /*"rememberMe": rememberMe*/
        },
        success: function(res) {
            if(res.cote=="10001"){
            	alert("无此用户");
            }else if(res.cote=="10002"){
            	alert("密码错误");
            }else if(res.cote=="10000"){
            	console.log(res.t);
            	sessionStorage.setItem("userObject",JSON.stringify(res.t));
            	window.location.href="index.html";
            }
        }
    });
}


/*function validateRule() {
    var icon = "<i class='fa fa-times-circle'></i> ";
    $("#signupForm").validate({
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            username: {
                required: icon + "请输入您的用户名",
            },
            password: {
                required: icon + "请输入您的密码",
            }
        }
    })
}*/
