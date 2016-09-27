// JavaScript Document
$(function(){
/*$(".uitem").show();*/
$(".litem > a").click(function(){
	$(this).next(".uitem").slideToggle()
	})
});