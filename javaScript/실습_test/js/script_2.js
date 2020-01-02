
$(document).ready(function(){

	$("#ex_01_title").click(function(){
		$(".p_01, .p_03").css("background", "#ffaaff");
	});

	$("#ex_02").click(function(){
		var $inputChk = $("input[name^='item_0']");
		console.log($inputChk);
		if($inputChk.attr("checked")){  // 현재 기준으로 체크가 되어있는 상태
			$("input[name^='item_0']").removeAttr("checked");
			$("#ex_02_tit").text("전체선택");
		}else{  // 현재 기준으로 체크가 되어있지 않은 상태 
			$("input[name^='item_0']").attr("checked", "checked");
			$("#ex_02_tit").text("전체해제");
		}
	});

	$(".ch_03_img span").click(function(){
		$(this).closest("div").hide();
	});
		


	var $moveTo = 0;
	$(".go").click(function(){
		$(".ch_04_01").stop().animate({"margin-left":$moveTo-=100}, 1500);
	});
	$(".back").click(function(){
		$(".ch_04_01").stop().animate({"margin-left":$moveTo+=100}, 1500);
	});



/*  실습05
	$("#tab_01").click(function(){
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").hide();
		$(".tab_01").fadeIn(1000);
		$(".bg-bk").animate({"left":0}, 500);
	});

	$("#tab_02").click(function(){
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").hide();
		$(".tab_02").fadeIn(1000);
		$(".bg-bk").animate({"left":50+"%"}, 500);
	});
*/


	$(".tab_btn>div").click(function(){
		var $index = $(this).index();

		$(".tab_box>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").removeClass("activeBox");
		$(".tab_box>div").eq($index).addClass("activeBox");
		$(".bg-bk").animate({"left":50*$index+"%"}, 500);
	});

/*
실습06. <더보기>를 클릭(click)했을 때, <닫기>를 보여주고, 답변을 펼쳐주세요. 
반대로 <닫기>를 클릭(click)했을 때, <더보기>를 보여주고, 답변을 숨기세요. 
단, 상하로 펼쳐지도록 구성 (힌트 : slideUp & slideDown 효과 메서를 활용하시오.)
*/


	$("#ex_06 .less").hide();

	$("#ex_06 .more").click(function(){
		$(this).closest("h4").next("p").slideDown();
		$(this).hide();
		$(this).siblings(".less").show();
	});

	$("#ex_06 .less").click(function(){
		$(this).closest("h4").next("p").slideUp();
		$(this).hide();
		$(this).siblings(".more").show();
	});

	


	$(".q_box p").hide();
	$(".q_box").click(function(){
		var $cur_Opt = $(this).children("p").hasClass("open");  //가상의 클래스가 본인을 체크할수 있는 열쇠 
		console.log($cur_Opt);
		//본인을 클릭시, 현재 열려있는지 또는 닫혀있는지를 체크. 열려있다면 
		if($cur_Opt == true){
			$(this).children("p").removeClass("open");  //본인한테 부여된 클래스를 제거 
			$(this).children("p").slideUp(); //본인을 닫는다.
		}else{  //다른 곳을 클릭시 
			$(".q_box p").removeClass("open");  //강제로 클래스를 제거
			$(".q_box p").slideUp();  //강제로 닫아버린다.
			$(this).children("p").addClass("open");  //클릭한 곳에 클래스를 부여 
			$(this).children("p").slideDown();  //본인만 열어준다.
		}
	});


/*
실습08. 아래 코딩 중 data-percent 속성 및 속성 값을 이용해서 애니메이션 바를 구성하세요. 
(지정한 값에 도달하는 시간은 2초) 또한 그 값을 ".cur_per" 내부에 넣으세요.			
*/
	
	$(".per_bar_frame").each(function(){
		var $cur_per = $(this).attr("data-percent");
		console.log($cur_per);  //80%, 90%, 75%
		$(this).find(".per_bar").animate({"width":$cur_per}, 2000);
		$(this).find(".cur_per").text($cur_per);

	});

	// $(".d_01").animate({"width":80+"%"}, 2000);
	// $(".d_01 .cur_per").text("80%");

	// $(".d_02").animate({"width":90+"%"}, 2000);

	// $(".d_03").animate({"width":75+"%"}, 2000);


/*
실습09. 팝업 만들기. 로그인 버튼을 클릭하면 로그인 박스가 나오도록 구성. 
반대로 "X" 버튼 클릭 또는 암막 클릭시 로그인 박스가 사라지도록 구성.
*/
	$(".login-box").hide();
	$(".login_btn").click(function(){
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