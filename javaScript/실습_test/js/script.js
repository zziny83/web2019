
var $result_01 = document.getElementById("result_01");

var $t = new Date();
var nowYear = $t.getFullYear();
var nowMonth = $t.getMonth()+1;
var nowDate = $t.getDate();
var nowDay = $t.getDay();
var arr_day = ["일", "월", "화", "수", "목", "금", "토"];
var nowHours = $t.getHours();
var nowMinutes = $t.getMinutes();
var nowSeconds = $t.getSeconds();


$result_01.innerHTML = nowYear+ "년 "+nowMonth+ "월 "+nowDate+ "일 "+arr_day[nowDay]+"요일 "+nowHours+" : "+nowMinutes+" : "+nowSeconds;



var $result_02 = document.getElementById("result_02");
var $str = "welcom to my home"; 
var $ch_str = $str.replace("home", "homepage");

$result_02.innerHTML = $ch_str;



var $result_03 = document.getElementById("result_03");
var $arr_01 = ["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"]
$result_03.innerHTML = "<img src='img/"+$arr_01[0]+"'>"+"<img src='img/"+$arr_01[1]+"'>"+"<img src='img/"+$arr_01[2]+"'>";

var $result_04 = document.getElementById("result_04");
var $kakao_01 = ["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"]
var $kakao_02 = ["카카오 소풍", "카카오 나들이", "카카오 휴가"]
$result_04.innerHTML = "<div class='kakao_bx'><img src='img/"+$kakao_01[0]+"'><span>"+$kakao_02[0]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$kakao_01[1]+"'><span>"+$kakao_02[0]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$kakao_01[2]+"'><span>"+$kakao_02[0]+"</span></div>";



var $arr_img =["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"]
var n = 0;
var $result_05 = document.getElementById("result_05");
$result_05.innerHTML = "<div><button onclick='nextImg();'>다음 이미지 보기</button></div><br><img id='pic' src='img/"+$arr_img[n]+"'>"

var $pic = document.getElementById("pic");
function nextImg(){
	console.log(n);
	if(n >=$arr_img.length-1){
		n=0;
		$pic.setAttribute("src", "img/"+$arr_img[n])
	}else{
		n++;
		$pic.setAttribute("src", "img/"+$arr_img[n])
	}
}


var k = 1;
var $res_07 = document.getElementById("res_07");
function subNext(){
	$res_07.setAttribute("src", "img/sub_0"+k+".jpg");
	k++;
	if(k>3){
		k=1;
	}
}




// var $img = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"]
// var n = 0;
// function next(){
// 	document.getElementById("result_06").innerHTML = "<div><button onclick='next();'>다음 이미지 보기</button></div><br><img src='img/"+$img[n]+"'>";
// 	n++;
// 	console.log($img[n].length);
// 	if(n>$img[n].length-1){
// 	n=0;
// 	}
// }



$(document).ready(function(){
	$("#select").css({"fontSize":"28px", "background":"#ffff00"});



});