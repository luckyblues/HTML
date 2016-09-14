// JavaScript Document
var i=0;
var timer;
$(function(){
	//显示第一张图片，其他图片隐藏
 $(".ig").eq(0).show().siblings().hide();
   ShowTime();
 $(".tab").hover(function(){
	 i=$(this).index();
	 Show();
	 clearInterval(timer);
	 },function(){
		 ShowTime();
		 });
      btn1Click();//往前翻页调用的方法
	  btn2Click();//往后翻页调用的方法
});

function btn1Click(){
	 $(".btn1").click(function(){
	 clearInterval(timer);
	 if(i==0){//进行判断，如果图片处在第一个则让i=5；然后i--；
	 i=5; 
	 }
	  i--;
	  Show();//调用方法进行图片切换
	  ShowTime();
	 });
	}
	
function btn2Click(){
	 $(".btn2").click(function(){
     clearInterval(timer);
	 if(i==4){
	 i=-1;
	 }
	 i++;
	  Show();
	  ShowTime();
	 });
	}
function Show(){
		 //切换图片的时候有过度效果，切换开始和切换结束时有0.3秒的过度效果
	 $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
	 $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}

function  ShowTime(){
timer=setInterval(function(){
	 i++;
	 if(i==5){
		 i=0;
		 }
   Show();
	 },4000);
}