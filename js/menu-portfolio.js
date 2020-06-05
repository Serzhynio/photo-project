$(document).ready(function(){
 	var route=$("#div_menu").offset().left;
 	$("#link_portfolio_menu").click(function(){
    	if ($("#div_menu").offset().left<0) $("#div_menu").animate({left:0},500);
    	else $("#div_menu").animate({left:route},500);
 	});
	$("#close_menu").click(function(){
     	if ($("#div_menu").offset().left<0) $("#div_menu").animate({left:0},500);
     	else $("#div_menu").animate({left:route},500);
    });
});