$(document).ready(function(){
 	var route=$("#div_post_menu").offset().left;
 	$("#link_post").click(function(){
    	if ($("#div_post_menu").offset().left<0) $("#div_post_menu").animate({left:0},500);
    	else $("#div_post_menu").animate({left:route},500);
 	});
	$("#close_post").click(function(){
     	if ($("#div_post_menu").offset().left<0) $("#div_post_menu").animate({left:0},500);
     	else $("#div_post_menu").animate({left:route},500);
    });
});