$(document).ready(function(){


	var	$arr_red = ["red_01.jpg", "red_02.jpg", "red_03.jpg", "red_04.jpg"];
	var	$arr_blue = ["blue_01.jpg", "blue_02.jpg", "blue_03.jpg", "blue_04.jpg"];
	var	$arr_black = ["black_01.jpg", "black_02.jpg", "black_03.jpg", "black_04.jpg"];

	//index.html로부터 링크를 타고와서 url창에 지정한 구성 형성(sub.html#해시)
	var hash = location.hash;  //  (...../sub.html#red) 주소 목록 중에서 맨끝의 '#'이하의 영역을 가져와서 저장 
	console.log(hash);  //#red, #blue, #black
	var ch_hash = hash.replace("#", "");
	console.log(ch_hash);  //red, blue, black

	$("body").attr("id", ch_hash);  //<body> => <body id="red">
 	
 	if(ch_hash == "red"){
 		$(".img_box").each(function(index){
 			$(this).css("background-image", "url(img/"+$arr_red[index]+")");
 		});
 	}else if(ch_hash == "blue"){
 		$(".img_box").each(function(index){
 			$(this).css("background-image", "url(img/"+$arr_blue[index]+")");
 		});
 	}else if(ch_hash == "black"){
 		$(".img_box").each(function(index){
 			$(this).css("background-image", "url(img/"+$arr_black[index]+")");
 		});
 	}

 	//sub.html 내부의 자체 메뉴를 클릭 시 화면변경 
 	$(".menu ul li a").click(function(){
 		var $self_hash = $(this).attr("href");
 		console.log($self_hash);
 		var $after_hash = $self_hash.replace("#", "");
 		$("body").attr("id", $after_hash);

 		if($after_hash == "red"){
 			$(".img_box").each(function(index){
 			$(this).css("background-image", "url(img/"+$arr_red[index]+")");
 			});
 		}else if($after_hash == "blue"){
 			$(".img_box").each(function(index){
 			$(this).css("background-image", "url(img/"+$arr_blue[index]+")");
 			});
 		}else if($after_hash == "black"){
 			$(".img_box").each(function(index){
 			$(this).css("background-image", "url(img/"+$arr_black[index]+")");
 			});
 		}

 	})


});