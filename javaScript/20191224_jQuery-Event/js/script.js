$(document).ready(function(){
	$("#header").load("header.html");
	$("#footer").load("footer.html");

	//load() 이벤트 : 페이지가 로딩된 후에 이벤트를 발생시킨다. 외부파일을 호출하여 로드할 때 사용가능
	//(공통적인 요소인 header와 footer를 호출하여 화면상의 html문서 형태로 가져올 수 있음. 단, 호스팅 서버를 활용하는 것이 필수 항목!!!)

	$(".click_ev").click(function(){
		$(".click_ev").text("click 완료");
	});
	$(".a_click").click(function(e){
	//	e.preventDefault();
		$(".a_click").css("color", "#ff0000");
	//	return false;
	});
/*	href의 속성을 막는 방법
	#1. 클릭이벤트를 종료하기 직전에 return false; 선언
	#2. 매개변수(e)를 선언하고 바로 하단에 e.preventDefault();  
	#3. a 태그 내부에 href 속성 값으로 javascript:void(0); 작성 
*/

	//클래스의 유무를 판단해서 클래스가 있으면 제거, 없다면 추가
	$("#detail").click(function(){
		var $has_class = $("#detail").hasClass("active"); //클래스가 존재하면 true, 없으면 false
		console.log($has_class);
		if($has_class == true){
			$("#detail").removeClass("active");
			$("#detail").text("더보기");
		}else{  //false
			$("#detail").addClass("active");
			$("#detail").text("감추기");
		}	
	});

	//mouseover()/mouseout() 이벤트

/*	$(".card_img").mouseover(function(){
		var $card = $(".card_img").attr("src");
		console.log($card);
		$(".card_img").attr("src", "img/card.png");
	});
	$(".card_img").mouseout(function(){
		$(".card_img").attr("src", "img/ace.png");
	});
*/


	//hover() 이벤트 : 마우스가 영역 내부로 집입했을 때 이벤트 발생 + 마우스가 영역 밖으로 빠져나왔을때 이벤트 발생 

	$(".card_img").hover(function(){  //마우스가 영역 내부로 진입시 이벤트 발생(mouseenter) 
		$(".card_img").attr("src", "img/card.png");
	}, function(){ //마우스가 영역 밖으로 빠져나왔을 때 이벤트가 발생(mouseleave) 
		$(".card_img").attr("src", "img/ace.png");
	});  


	//mousemove() : 마우스의 위치를 측정하는 이벤트. 활용 범위는 마우스를 움직였을 때 위치값을 받아와서 실행문을 작동
	$(document).mousemove(function(e){
		var x_position = e.pageX;  //브라우저 기준의 마우스 위치의 x 좌표 
		var y_position = e.pageY;  //브라우저 기준의 마우스 위치의 y 좌표

	/*	console.log("현재 마우스의 x 좌표 :"+x_position);
		console.log("현재 마우스의 y 좌표 :"+y_position); 
	*/

	});

	$("#user_id").focus(); //브라우저가 모두 로딩되는 순간 해당하는 입력박스에 포커스를 강제 실행한다. 

/*	$("#user_id").blur(function(){
		var $in_val = $("#user_id").val();
		if($in_val){  //입력값이 존재한다면 
			alert("입력값 있음");
		}else{
			alert("입력값 없음");
		}
	});
*/

	$(".change_ev #ch_ev").change(function(){
		var $fav_trip = $(".change_ev #ch_ev").val();
		console.log($fav_trip);
		$(".fav_trip").text($fav_trip);
	});


	$(window).scroll(function(){
		var $location_y = $(this).scrollTop();
		console.log($location_y);
		$(".cur_scroll_loc span").text($location_y);
		if($location_y>=100){
			if($location_y>=140){
				$("#section").css("background", "#aaffaa");
			}else{
				$("#section").css("background", "#ffffaa");
			}
		}else{
			$("#section").css("background", "#ffaaff");
		}
	});


/*
	$(window).scroll(function(){
		var $scrollTop = $(this).scrollTop();
		if($scrollTop >= $("#mid_header").offset().top){
			$("#mid_header").css("position", "fixed");
		}else{
			$("#mid_header").css("position", "static");
		}
	});
*/


	function resize_ev(){
		var $win_width = $(window).width();
		console.log($win_width);
		$(".cur_view span").text($win_width);
	}
	resize_ev();

	$(window).resize(function(){
		resize_ev();
	});


	$(".index_method input").change(function(){
		var $index_num = $(this).index();
		console.log($index_num);
		var $index_val = $(".index_method input").eq($index_num).val();
		console.log($index_val);
		$(".hash_group").append("<a href='#"+$index_val+"'>#"+$index_val+"</a>&nbsp;");

		$(this).attr("disabled", "disabled");
	});


/*
	#1 show() => display:block /  hide() => display:none;
	$(".tab_btn li:eq(0)").click(function(){
		$(".tab_cont<div:nth-child(1)").show();
		$(".tab_cont<div:nth-child(2)").hide();
		$(".tab_cont<div:nth-child(3)").hide();
	});
	$(".tab_btn li:eq(1)").click(function(){
		$(".tab_cont<div:nth-child(1)").hide();
		$(".tab_cont<div:nth-child(2)").show();
		$(".tab_cont<div:nth-child(3)").hide();
	});
	$(".tab_btn li:eq(2)").click(function(){
		$(".tab_cont<div:nth-child(1)").hide();
		$(".tab_cont<div:nth-child(2)").hide();
		$(".tab_cont<div:nth-child(3)").show();
	});
*/

	// #2. index() 메서드 활요하여 탭박스 구성 

/*	$(".tab_btn li").click(function(){
		var $index = $(this).index();
		console.log($index);
		$(".tab_btn li").removeClass("active_btn");
		$(this).addClass("active_btn");
		$(".tab_cont>div").removeClass("active_cont");
		$(".tab_cont>div").eq($index).addClass("active_cont");
		return false;
	});
*/

	// #3. rel의 속성을 활용한 택박스 구성
	 $(".tab_btn li").click(function(e){
	 	e.preventDefault();
	 	var $rel = $(this).attr("rel");
	 	console.log($rel);
	 	$(".tab_btn li").removeClass("active_btn");
	 	$(this).addClass("active_btn");
	 	$(".tab_cont>div").removeClass("active_cont");
	 	$("."+$rel).addClass("active_cont");

	 	//return false;

	 });






});