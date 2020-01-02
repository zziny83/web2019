$(document).ready(function(){
	//도큐먼트가 로딩되면서 호출하여 해당 내용을 변경 
	$.ajax({
		url:"main.html", //호출을 원하는 파일의 경로 및 파일명을 작성
		type:"post",  //get(로딩되면서 데이터 값(화면 포함)을 가져오는 방식 - 전처리) / post(요청을 했을때 데이터 값(화면 포함)을 가져오는 방식 - 후처리) 
		success:function(result){  //모든 요청(post)과 가져올 파일의 확인이 모두 끝나면 
			$("#section").html(result);  //해당하는 파일을 지정한 위치의 내부에 넣어준다.
		}
	});

	//로고 클릭했을 때 페이지 가져오기
	$(".logo").click(function(){
		$.ajax({
			url:"main.html",
			type:"post",
			success:function(result){
				$("#section").html(result);
			}
		});
		$("#section").css("background", "#aaffff");
		return false;
	});


	//MENU-01 클릭했을 때 페이지 가져오기
	$(".main_menu01").click(function(){
		$.ajax({
			url:"sub1.html",
			type:"post",
			success:function(result){
				$("#section").html(result);
			}
		});
		$("#section").css("background", "#ffaa00");
		return false;
	});

	//MENU-02 클릭했을 때 페이지 가져오기
	$(".main_menu02").click(function(){
		$.ajax({
			url:"sub2.html",
			type:"post",
			success:function(result){
				$("#section").html(result);
			}
		});
		$("#section").css("background", "#aaffaa");

		return false;
	});

	//MENU-03 클릭했을 때 페이지 가져오기
	$(".main_menu03").click(function(){
		$.ajax({
			url:"sub3.html",
			type:"post",
			success:function(result){
				$("#section").html(result);
			}
		});
		$("#section").css("background", "#ffffaa");
		return false;
	});

	//MENU-04 클릭했을 때 페이지 가져오기
	$(".main_menu04").click(function(){
		$.ajax({
			url:"sub4.html",
			type:"post",
			success:function(result){
				$("#section").html(result);
			}
		});
		$("#section").css("background", "#aaaaff");
		return false;
	});


});