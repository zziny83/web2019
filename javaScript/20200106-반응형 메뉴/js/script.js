$(document).ready(function(){
	$("#ex_01 .res_btn a").click(function(){

		//#1.슬라이드 토굴을 활용
		/*
		$(".menu").slideToggle();
		*/

		//#2. active 클래스명을 활용한 방법
		var $active = $("#ex_01 .menu").hasClass("active");
		if($active == true){
			$("#ex_01 .menu").removeClass("active");
			$("#ex_01 .menu").slideUp();
		}else{
			$("#ex_01 .menu").addClass("active")
			$("#ex_01 .menu").slideDown();
		}
		return false;
	});

	$("#ex_02 .res_btn a").click(function(){
		$("#ex_02 .menu").slideDown();
		return false;
	});

	$("#ex_02 .close_btn").click(function(){
		$("#ex_02 .menu").slideUp();
		return false;
	});

	$("#ex_03 .res_btn a").click(function(){
		$("#ex_03 .menu").animate({"left":0}, 500);
		return false;
	});
	$("#ex_03 .close_btn").click(function(){
		$("#ex_03 .menu").animate({"left":"-100%"}, 500);
		return false;
	});


	$("#ex_04 .res_btn a").click(function(){
		$("#ex_04 .menu").addClass("active");
		return false;
	});
	$("#ex_04 .close_btn").click(function(){
		$("#ex_04 .menu").removeClass("active");
		return false;
	});





});