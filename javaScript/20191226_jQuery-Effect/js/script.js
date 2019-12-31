$(document).ready(function(){
	$(".showBtn").click(function(){
		//$(".ef_01").show();  //display:block
		//$(".ef_01").show("slow"); //1초만에 최종 가로값, 세로값으로 도달시킴 
		//$(".ef_01").show("fast");
		//$(".ef_01").show(5000);  //시간을 직접 부여시 밀리세컨드 단위를 사용
		$(".ef_01").show(5000, function(){
			$(".ef_01").css("background", "#ffaaff"); //콜백함수 : (효과) 메서드가 실행이 완료된 후 그 다음에 실행할 함수를 지칭
		});
	});
	$(".hideBtn").click(function(){
		$(".ef_01").hide();  //display:none
		$(".ef_01").hide(0, function(){
			$(".ef_01").css("background", "#aaffff");
		}); 
	});

	//toggle() 메서드 : display:block =>display:none로 변경 / display:none => display:block 변경 
	$(".cont").click(function(){
		$(".detail_cont").toggle(2000);
	});
	//stop() 메서트 : 이전 메모리상에서 걸려있는 반복적인 요소를 제거하고 1회만 실행하도록 선언

	$(".fadeInBtn").click(function(){
		$(".ef_02").fadeIn(2000, linear);
	});
	$(".fadeOutBtn").click(function(){
		$(".ef_02").fadeOut(1000);
	});
	/*시간 속도를 제어 
	ease : 최초 시간대비 속도가 느리게 적용하다가 도달시점에서 시간대비 속도를 늦추는 방법 
	ease-in : 최초 시간대비 속도가 느리게 적용되다가 마지막 도달시점에서 빠르게 적용
	ease-out : 최초 시간대비 속도가 빠르게 진행되다가 도달시점에서 늦추는 적용
	ease-in-out : ease와 동일   
	linear: 시간 대비 속도가 동일하게 적용 
	*/

	$(".slideDownBtn").click(function(){
		$(".ef_03").slideDown();
	});
	$(".slideUpBtn").click(function(){
		$(".ef_03").slideUp();
	});
	$(".slideToggleBtn").click(function(){
		$(".ef_03").slideToggle();
	});

	//$(선택자).animate({애니메이션 속성(위치값) : 속성값}, 시간, 콜백함수);
	//{애니메이션 속성(위치값) : 속성값} => {"margin-left":"100px", "margin-top":"50px"}
	var $moveTo = 0;
	$(".ani_left").click(function(){
		$(".ef_04").stop().animate({"margin-left":$moveTo-=100}, 500);
	});
	$(".ani_right").click(function(){
		$(".ef_04").stop().animate({"margin-left":$moveTo+=100}, 500);
	});

/*
	$(".menu>li").hover(function(){  //마우스가 영역 내부로 진입했을 때 
		$(this).find("ul").stop().slideDown();
	}, function(){  //마우스가 영역 밖으로 벗어났을 때 
		$(this).find("ul").stop().slideUp();
	});
	
	//stop() : 이벤트가 중복 적용되는 부분을 막는 기능. 1회만 적용 
*/

	$(".menu>li").click(function(){
		var $has = $(this).hasClass("active");  //true 또는 false
		console.log($has);
		if($has == true){
			$(".menu>li").removeClass("active");
			$(".menu>li").find("ul").stop().slideUp();
		}else{
			$(".menu>li").removeClass("active");
			$(".menu>li").find("ul").stop().slideUp();
			$(this).addClass("active");
			$(this).find("ul").stop().slideDown();
		}
		return false;  //<a href=""> 반드시 적용해야할 구문!!!!!
	})


	setInterval(function(){
		var $first_child = $(".slide_01 ul li").eq(0);
		console.log($first_child);
		$(".slide_01 ul").animate({"margin-left":"-100%"}, 1000, function(){
			$(".slide_01 ul").append($first_child).css("margin-left", "0%");
		});
	}, 3000);



	var $last_clone = $(".slide_02 ul li").last().clone(true);
	console.log($last_clone);
	$(".slide_02 ul").prepend($last_clone);
	$(".slide_02 ul li").last().remove();

	setInterval(function(){
		var $last_child = $(".slide_02 ul li").last();
		console.log($last_child);
		$(".slide_02 ul").animate({"margin-left":"0%"}, 1000, function(){
			$(".slide_02 ul").prepend($last_child).css("margin-left", "-100%");
		});
	}, 3000);



	setInterval(function(){
		var $first_child = $(".slide_03 ul li").first();
		$(".slide_03 ul").animate({"margin-top":"-500px"}, 1000, function(){
			$(".slide_03 ul").append($first_child).css("margin-top", 0);
		});
	}, 3000);


	var $last_clone = $(".slide_04 ul li").last();
	$(".slide_04 ul").prepend($last_clone);

	setInterval(function(){
		var $last_child = $(".slide_04 ul li").last();
		$(".slide_04 ul").animate({"margin-top":0}, 1000, function(){
			$(".slide_04 ul").prepend($last_child).css("margin-top","-500px");
		});
	}, 3000);


	var n = 0;  //eq(index) 번호로 순차적으로 접근하기 위한 초기값 선언
	var depth = 2;  //레이어 상의 z-index값을 올려서 해당하는 순서를 배치하기 위한 초기값 선언
	
	(function ani(){
		$(".slide_05 li").eq(n).css("z-index", depth++).fadeOut(0);
		$(".slide_05 li").eq(n).delay(1000).fadeIn(500, function(){
			if(n == 3){
				n=0;
			}else{
				n++;
			}
			ani();  //재귀함수 - 본인을 호출하여 반복적으로 수행하도록 적용하는 함수 
		});
	})();  // () : 빈함수 - 호출 값 없이 함수문을 구동하는 방식(장점 : 메모리를 차지하지 않기 때문에 바로 브라우저가 열리자 마자 구동되며 우선적으로 함수문에 접근가능)








});