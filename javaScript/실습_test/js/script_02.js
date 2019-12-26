
$(document).ready(function(){
	$("#select").css({"fontSize":"28px", "background":"#ffff00"});
	$(".sience_01, .sience_03").css("color", "#00dd00");
	$(".test_04 p:eq(1), .test_04 p:eq(3)").css("background", "#aaffff");
	$(".test_05 p:eq(3)").siblings("p").css("color", "#0000ff");
	$(".menu li:eq(2) a").closest(".menu").css("background", "#ffff77");
	$(".main_menu li:eq(1) a").closest(".main_menu").next().css("background", "#aaffff").find("li:eq(2) span").css("color", "#ff0000");
	$(".test_08 input[type='text']").css("background", "#ffffaa");
	$(".test_09 p").text("텍스트 변경 완료").css("background", "#aaffaa");
	$(".test_10 p").click(function(){
		$(this).slideUp();
	});

	$(".test_11 p").hover(function(){
		$(this).addClass("highlight");
	}, function(){
		$(this).removeClass("highlight");
	});

});