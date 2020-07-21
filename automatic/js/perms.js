
Vue.directive("perms",{
	inserted:function(el,binding){
		//将字符串转换成对象
		var perms = JSON.parse(sessionStorage.getItem("perms"));
		var flag = perms.some(item=>item.ename==binding.value);
		if(!flag){
			el.remove();
		}
	}
})
// Vue默认api(方法)添加
Vue.prototype.$perms = function(permsName){
	var perms = JSON.parse(sessionStorage.getItem("perms"));
	var flag = perms.some(item=>item.ename==permsName);
	return flag;
}