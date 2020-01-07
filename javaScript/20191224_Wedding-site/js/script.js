$(document).ready(function(){

	var $concept = $(".menu_concept").offset().top;
	console.log($concept);

	$(".menuBar li").click(function(){
		var $rel = $(this).attr("rel");
		$("html, body").animate({scrollTop:$("div[class^='menu_"+$rel+"']").offset().top}, 1000);
		return false;
	});

	$(".topBtn img").click(function(){
		$("html, body").animate({scrollTop:0}, 1000);
		return false;
	});



});