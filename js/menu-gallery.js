$(document).ready(function(){
 	var route=$("#div_menu_gallery").offset().left;
 	$("#link_gallery_menu").click(function(){
    	if ($("#div_menu_gallery").offset().left<0) $("#div_menu_gallery").animate({left:0},500);
    	else $("#div_menu_gallery").animate({left:route},500);
 	});
	$("#close_gallery_menu").click(function(){
     	if ($("#div_menu_gallery").offset().left<0) $("#div_menu_gallery").animate({left:0},500);
     	else $("#div_menu_gallery").animate({left:route},500);
    });
});