
function ShowLoginText(){
	layer.open({
		type:1,
		title:"登录",
		area:["395px","300px"],
		content:$("#loginBox"),
		});
	}
function Login(){
	var username=$.trim($("#InputUsername").val());//获取用户名trim是去掉空格
	var password=$.trim($("#InputUserPwd").val());//获取密码
	if(username==""||password==""){
		layer.alert("用户名或者密码不能为空!",{
		title:"提示",
		icon:5,	
		});
	}
}

function ShowRegText(){
	layer.open({
		type:1,
		title:"注册",
		area:["395px","340px"],
		content:$("#regBox"),
		});
}
function Reg(){
	var username=$.trim($("#InputUsername").val());//获取用户名trim是去掉空格
	var userEmail=$.trim($("#regUserEmail").val());
	var password=$.trim($("#InputUserPwd").val());//获取密码
	if(username==""||userEmail==""||password==""){
		layer.alert("用户名或者密码不能为空!",{
		title:"提示",
		icon:5,	
		});
	}
}
