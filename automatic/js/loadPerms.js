function findByPerms() {
	var that = this;
	var perms = JSON.parse(sessionStorage.getItem("users"));
	$.ajax({
		url: "http://localhost:8080/java-entitysStore2/module/findByRoleId",
		data: {
			roleId: perms.roleId,
			catalog: 1
		},
		xhrFields:{
			withCredentials:true
		},
		success: function(result) {
			//存储数据放到浏览器缓存中
			sessionStorage.setItem("perms",JSON.stringify(result));
		}
	});
}
findByPerms();