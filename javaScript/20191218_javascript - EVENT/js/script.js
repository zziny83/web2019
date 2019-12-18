/*javascript - EVENT*/
//요소별 이벤트(click, mouseover, mouseout)


var $img = document.getElementById("import");
function importImg(){
	$img.setAttribute("src", "img/pet.png");
}
function overImg(){
	$img.setAttribute("src", "img/pet.png");
}
function outImg(){
	$img.setAttribute("src", "img/dog.png");
}


//전체 구성 이벤트(resize, scroll)
var $realWidth = window.innerWidth;  //모니터화면의 사이즈가 아닌 브라우저의 실제 가로값을 가져옴
console.log("브라우저 가로폭 : "+$realWidth);

var $realHeight = window.innerHeight;   //모니터화면의 사이즈가 아닌 브라우저의 실제 세로값을 가져옴
console.log("브라우저 세로폭 : "+$realHeight);

var $write = document.getElementById("writeSize");
var $box = document.getElementById("box");
/*
function resizeEvt(){
	var $realWidth = window.innerWidth;  //모니터화면의 사이즈가 아닌 브라우저의 실제 가로값을 가져옴
	console.log($realWidth);
	if($realWidth<1200){  //PC 모니터 구간 제외(w:1200 미만)
		if($realWidth<768){  //모바일 구간(w:768 미만)
			$write.innerHTML="<span>모바일 구간</span>";
			$box.setAttribute("class", "mobile");
		}else{  //태플릿 구간(w:768~1199)
			$write.innerHTML="<span>태블릿 구간</span>";
			$box.setAttribute("class", "tablet");
		}
	}else{  //PC 모니터 구간
		$write.innerHTML="<span>PC 구간</span>";
		$box.setAttribute("class", "pc");
	}
}
resizeEvt();  //최초 브라우저 로딩시 이벤트를 발생시켜 현재 사이즈에 해당하는 항목을 실행하도록 설정
*/

var $head_bg = document.getElementById("head_part");
function scrollEvt(){
	var $scrollY = window.scrollY;
	console.log($scrollY);  //브라우저 상단으로부터 세로축으로 얼마나 떨어져있는가를 값을 가져옴(스크롤 바의 상단 기준) 
	if($scrollY > 72){
		$head_bg.style.background="#ffaaff";
		$head_bg.setAttribute("class", "sticky");
		$img.style.paddingTop="100px";
	}else{
		$head_bg.style.background="#cfcfcf";
		$head_bg.setAttribute("class", "");
		$img.style.paddingTop="0px";
	}
}
scrollEvt();  //최초 브라우저 로딩시 함수문을 로드하여 현재 스크롤 위치를 파악하고 해당하는 항목을 실행하라는 명령


var $section = document.getElementById("sec");
function changSize(){
	var $bx_width = window.innerWidth;
	var $bx_height = window.innerHeight;
	$section.style.width=$bx_width + "px"; 
	$section.style.height=$bx_height + "px"; 
	$section.style.background = "#aaffaa";

}
function resizeEvt(){
	changSize();  //해상도가 조정이 되었을 때 함수문을 실행하라는 호출문
}
changSize();  //브라우저 최초 로딩시 함수문을 실행하라는 호출문
