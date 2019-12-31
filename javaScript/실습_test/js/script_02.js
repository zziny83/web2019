
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


	// 조건1. 셀렉트 박스의 옵션을 변경할 때 그 내부 내용을 하단에 위치한 클래스명 result를 가진 요소에 나타나도록 구성하세요. 
	// (change() 이벤트 및 val()와 text() 메서드 이용)

	$(".test_12 #ch_ev").change(function(){
		var $fav_trip = $(".test_12 #ch_ev").val();
		console.log($fav_trip);
		$(".result").text($fav_trip);
	});


	// 조건1. 브라우저의 크기를 가로 또는 세로를 변경할 때마다 클래스명 size_change를 가진 요소 하위에 
	// "가로 : 000px", "세로 : 000px;"로 나타나도록 구성하세요. 
	// (resize() 이벤트 및 가로와 세로를 받을 수 있는 식 이용 : $(window).width();)


	function size_change(){
		var $win_width = $(window).width();
		var $win_height = $(window).height();
		console.log($win_width);
		$(".widthTxt").text($win_width);
		$(".heightTxt").text($win_height);
	}
	size_change();

	$(window).resize(function(){
		size_change();
	});


	// 조건1. 브라우저에서 스크롤 바를 움직일 때마다 스크롤바의 상단 높이 위치를 저장하여 
	// 클래스명 scroll_top을 가진 요소 하위에 "현재 스크롤바 상단 위치 : 000px"로 나타나도록 구성하세요. 
	// (scroll() 이벤트 및 스크롤바의 위치를 받을 수 있는 식 이용 : $(window).scrollTop();)

	$(window).scroll(function(){
		var $location_y = $(this).scrollTop();
		console.log($location_y);
		$(".scroll_location").text($location_y);
	});


	// 조건1. 먼저 브라우저가 로딩되면서 하단의 p 태그를 감추세요.(hide() 효과 메서드를 이용)
	// 조건2. 두 개의 버튼을 클릭할 때 각각의 기능을 가진 효과 메서드를 부여하여 아래 p 태그의 문단을 "보여주고", "감추기"를 구현하세요.
	// (show(), hide() 효과 메서드를 이용)

	$(".test_15 p").hide();
	$(".hide-btn").click(function(){
		$(".test_15 p").hide();
	});
	$(".show-btn").click(function(){
		$(".test_15 p").show();
	});


// 조건1. 먼저 브라우저가 로딩되면서 모든 하단의 p 태그를 감추세요.(hide() 효과 메서드를 이용)
// 조건1. 두 개의 버튼을 클릭할 때 각각의 기능을 가진 효과 메서드를 부여하여 아래 두개의 문단을 "보여주고", "감추기"를 구현하세요.
// (show(), hide() 효과 메서드를 이용)
// 조건3. 각각의 p 태그의 박스에는 클래스명별로 시간을 다르게 부여하세요.
// (".normal : 시간부여 없음 / .very-fast : 50 / .fast : 'fast' / .slow : 'slow' / very-slow : 2000 )

	$(".test_16 p").hide();
	$(".hide-btn").click(function(){
		$(".test_16 p").hide();
	});
	$(".show-btn").click(function(){
		$(".normal").show();
		$(".very-fast").show(50);
		$(".fast").show("fast");
		$(".slow").show("slow");
		$(".very-slow").show(2000);
	});


// 조건1. 먼저 브라우저가 로딩되면서 하단의 p 태그를 감추세요.(hide() 효과 메서드를 이용)
// 조건2. 두 개의 버튼을 클릭할 때 각각의 기능을 가진 효과 메서드를 부여하여 아래 p 태그의 문단을 fade를 진행하면서 
// "보여주고", "감추기"를 구현하세요.(fadeIn(), fadeOut() 효과 메서드를 이용)

	$(".test_17 p").hide();
	$(".out-btn").click(function(){
		$(".test_17 p").fadeOut();
	});
	$(".in-btn").click(function(){
		$(".test_17 p").fadeIn();
	});


// 조건1. 먼저 브라우저가 로딩되면서 하단의 p 태그를 감추세요.(hide() 효과 메서드를 이용)
// 조건2. 두 개의 버튼을 클릭할 때 각각의 기능을 가진 효과 메서드를 부여하여 아래 p 태그의 문단을 slide를 진행하면서 
// "보여주고", "감추기"를 구현하세요.(slideDown(), slideUp() 효과 메서드를 이용)

	$(".test_18 p").hide();
	$(".up-btn").click(function(){
		$(".test_18 p").slideUp();
	});
	$(".down-btn").click(function(){
		$(".test_18 p").slideDown();
	});



// 조건1. '오른쪽으로 이동시키기'라는 버튼을 클릭하면 이미지를 오른쪽으로 200px 이동하도록 설정하세요.
// (animate() 효과 메서드를 이용, 이동시간은 1초 부여할 것)

	var moveTo = 0;
	$(".buttonRight").click(function(){
		$(".test_19 p img").stop().animate({"margin-left":moveTo+=200}, 500);
	});

// 조건1. 이미지를 클릭했을 때, 이미지 태그 내부에 있는 title의 속성값을 저장하고 그 값을 하단 p태그 내부의 내용에 출력하세요. 
// (click() 이벤트와 attr() 메서드 및 text() 메서드를 이용)
	$(".test_20 img").click(function(){
		var $text = $(".test_20 img").attr("title");
		$(".img_name").text($text);
	});

// 조건1. 하단의 '이미지 변경하기' 버튼을 클릭했을 때, 이미지를 클릭했을 때, kakao_img2.jpg 이미지가 보여지도록 구성하세요. 
// (click() 이벤트와 attr() 메서드 메서드를 이용)
	$(".test_21 button").click(function(){
		$(".test_21 img").attr("src", "img/kakao_img2.jpg");
	});

// 조건1. 각각의 버튼을 클릭했을 때 기존 이미지를 기준 좌우측으로 이미지가 새롭게 출력될 수 있도록 구성하세요. 
// '좌측 이미지 추가' 클릭시 'wall_img1.jpg' / '우측 이미지 추가' 클릭시 'wall_img3.jpg' 출력.
// (click() 이벤트와 prepend(), append() 메서드를 이용)

	$(".left_add").click(function(){
		$(".test_22 .img_frame").prepend("<img src='img/wall_img1.jpg'>"); 
	});
	$(".right_add").click(function(){
		$(".test_22 .img_frame").append("<img src='img/wall_img3.jpg'>"); 
	});


// 조건1. 각각의 버튼을 클릭했을 때 기존 이미지를 기준 좌우측으로 이미지가 새롭게 추가될 수 있도록 구성하세요. 
// '좌측 이미지 넣기' 클릭시 'wall_img4.jpg' / '우측 이미지 넣기' 클릭시 'wall_img6.jpg' 출력.
// (click() 이벤트와 before(), after() 메서드를 이용)

	$(".before_add").click(function(){
		$("#kakao").before("<img src='img/wall_img4.jpg'>"); 
	});
	$(".after_add").click(function(){
		$("#kakao").after("<img src='img/wall_img6.jpg'>"); 
	});


// 조건1. 각각의 버튼을 클릭했을 때 클래스(클래스명 : effect)를 추가 또는 삭제하여 기존 이미지에 효과를 부여 또는 제거가 될 수 있도록 구성하세요.
// (click() 이벤트와 addClass(), removeClass() 메서드를 이용)
	$(".effect_add").click(function(){
		$(".img_frame #band").addClass("effect");
	});
	$(".effect_remove").click(function(){
		$(".img_frame #band").removeClass("effect");
	});


// 조건1. 하단의 버튼을 클릭했을 때 기존 이미지에서 effect 클래스 유무를 판단(if~else 조건문 구성) 후, 
// 클래스(클래스명 : effect)를 추가 또는 삭제를 통해 효과를 부여 또는 제거가 될 수 있도록 구성하세요.
// (click() 이벤트와 hasClass(), addClass(), removeClass() 메서드를 이용)

	$(".effect_confirm").click(function(){
		var $has = $("#refresh").hasClass("effect");
		console.log($has);
		if($has == true){
			$("#refresh").removeClass("effect");
		}else{
			$("#refresh").addClass("effect");
		}
		return false;
	});


// 조건1. 첫번째 이미지를 제외한 나머지 이니지를 모두 감추세요.(not(특정 선택자) 메서드, eq() 메서드와 hide() 메서드 이용)
// 조건2. 하단의 버튼을 클릭했을 때 우측으로 페이드인 효과를 적용하여 시간간격(1초) 각 이미지가 순차적으로 나올 수 있도록 구성하세요.
// (click() 이벤트와 콜백함수, fadeIn() 메서드를 이용)

	$(".test_26 .img_frame img").not(":eq(0)").hide();
	$(".fadein_img").click(function(){
		$(".test_26 .img_frame img:eq(1)").fadeIn(1000, function(){
			$(".test_26 .img_frame img:eq(2)").fadeIn(1000, function(){
				$(".test_26 .img_frame img:eq(3)").fadeIn(1000, function(){
					$(".test_26 .img_frame img:eq(4)").fadeIn(1000, function(){
					});
				});
			});
		});
	});


	$("#txt_ch").css({"color":"red", "fontSize":"20px"});


	var $p2 = $(".txt_02").text();
	console.log($p2);
	$(".txt_sel span").text($p2);


	$("#ex_03 p").last().after("<p>파리</p>");

	$("#ex_04").attr("src", "img/slide1.jpg");

	$("#ex_05").attr("src", "img/image_02.jpg");

	$("#ex_06").attr("src", "img/slide3.jpg");
	$("#ex_06").stop().animate({"margin-left":"200px"}, 2000);

	$("#ex_07 .num_03").addClass("active");

	$("#ex_08 .pd_04").remove();


	var $hb = $(".ho_04");
	$(".ho_01").before($hb);


	var $city = $(".lo_03").val();
	console.log($city);
	$(".lo_03").val("대전");


	$(".main>li").click(function(){
		var $has = $(this).hasClass("active");
		console.log($has);
		if($has == true){
			$(".main>li").removeClass("active");
			$(".main>li").find("ul").stop().slideUp();
		}else{
			$(".main>li").removeClass("active");
			$(".main>li").find("ul").stop().slideUp();
			$(this).addClass("active");
			$(this).find("ul").stop().slideDown();
		}
		return false;
	});

	$(".main>li").hover(function(){
		$(this).css("background", "red");
		$(this).find("ul").stop().slideDown();
	}, function(){
		$(this).css("background", "transparent");
		$(".main>li").find("ul").stop().slideUp();
	});



	



});