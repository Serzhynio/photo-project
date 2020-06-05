$(document).ready(function(){
 	var route=$("#div_map_menu").offset().left;
 	$("#link").click(function(){
    	if ($("#div_map_menu").offset().left<0) $("#div_map_menu").animate({left:0},500);
    	else $("#div_map_menu").animate({left:route},500);
 	});
	$("#close").click(function(){
     	if ($("#div_map_menu").offset().left<0) $("#div_map_menu").animate({left:0},500);
     	else $("#div_map_menu").animate({left:route},500);
    });
});