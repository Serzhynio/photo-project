$(document).ready(function(){
 	var route=$("#div_Menu").offset().left;
 	$("#link_Menu").click(function(){
    	if ($("#div_Menu").offset().left<0) $("#div_Menu").animate({left:0},500);
    	else $("#div_Menu").animate({left:route},500);
 	});
	$("#close_Menu").click(function(){
     	if ($("#div_Menu").offset().left<0) $("#div_Menu").animate({left:0},500);
     	else $("#div_Menu").animate({left:route},500);
    });
});