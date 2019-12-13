/*브라우저 객체 모델*/
var $bom = "브라우저 객체 모델";
//$bom은 전체에 영향을 미칠 수 있는 전역 변수
window.document.write($bom);  //window는 생략 가능

function winOpen(){
	window.open("popup.html", "popup", "width=640, height=400, left=50, top=50");
}
/*open("url 주소(절대경로/상대경로)", "창 이름", "창을 구성하는 옵션(가로, 세로, 좌상단으로 이격된 거리)") : 새로운 창을 띄우겠다는 메서드*/

function unmember(){
	var $c_01 = confirm("정말 회원을 탈퇴하시겠습니까?");  //'확인'이라는 버튼을 틀릭하는 것 자체만으로도 행동을 진행한다는 값이 있음을 저장 
	if($c_01){
		location.href="index.html"; //회원탈퇴가 확실할 때 보통의 경우 홈화면으로 돌아가도록 구성(UI 관점에서 접급하는 방식)
	}
}	


/*screen 객체*/
var $sc_w = screen.width;
var $sc_h = screen.height;
var $sc_availW = screen.availWidth;
var $sc_availH = screen.availHeight;
document.write("현재 스크린의 가로 크기 : "+$sc_w, "<br>");
document.write("현재 스크린의 세로 크기 : "+$sc_h, "<br>");
document.write("현재 스크린의 가로 가용 크기 : "+$sc_availW, "<br>");
document.write("현재 스크린의 세로 가용 크기 : "+$sc_availH, "<br>");

var i = 0;
var $interval = setInterval(function(){
	$time = i++;
	document.write($time);
}, 1000);  //1초마다 내부의 샐행문을 반복하여 실행시키겠다는 의미 
clearInterval($interval);

var $hash_txt = location.hash;
console.log($hash_txt);
var $ch_hash = $hash_txt.replace("#", "");
console.log($ch_hash);