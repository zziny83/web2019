$(document).ready(function(){
	$(".login").click(function(){
		$(".popup_bg").addClass("active");
		$(".popup_frame").addClass("active");
		return false;
	});

	$(".popup_bg, .close").click(function(){
		$(".popup_bg").removeClass("active");
		$(".popup_frame").removeClass("active");
		return false;
	});
});