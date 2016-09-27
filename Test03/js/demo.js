// JavaScript Document
var num1; 
var num2;
var provinces=["河南省","山西省","山东省"];
var cities=[["郑州","开封","洛阳","周口"],["太原","大同","阳泉"],["烟台","青岛","济南","威海"]];
var countires=[[["龙湖区","新郑区"],["金明区","南关区"],["老城","洛龙"],["商水","周口"]],[["迎泽区","万柏林区","小店区","杏花岭区"],["城区","矿区"],["南边区","小北沟"]],[["莱山区","福山区","芝罘区"],["市南","市北"],["市中区","天桥区"],["文登市","乳山市"]]];
$(function(){
	for(var i=0;i<provinces.length;i++){
	$("#province").append("<option>"+provinces[i]+"</option>");
	}
	$("#province").change(function(){
		$("#city").children().not(":eq(0)").remove();
		num1=$(this).children("option:selected").index();
		var acity1=cities[num1-1];
		for(var j=0;j<acity1.length;j++){
		$("#city").append("<option>"+acity1[j]+"</option>");
		}
	$("#city").change(function(){
		$("#country").children().not(":eq(0)").remove();
		num2=$(this).children("option:selected").index();
		var contries1=countires[num1-1][num2-1];
		for( var z=0;z<contries1.length;z++){
		$("#country").append("<option>"+contries1[z]+"</option>");
		}
		});
		});
	});