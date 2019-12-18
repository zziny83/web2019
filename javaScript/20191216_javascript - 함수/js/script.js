/*Javascript - 함수*/
function proceedAlert(){
	alert("함수의 실행문 영역입니다.");
}

// proceedAlert(); 함수를 호출하는 열쇠같은 역할을 담당 
var $bg_color = ["#aaffff", "#ffaaff", "#ffffaa", "#aaffaa"];
var $i = 0;

function ch_bg(){
	document.getElementsByTagName("body")[0].style.background = $bg_color[$i];
	$i++;
	if($i>=4){
		$i=0;
	}
}

document.write("<hr>");
/*매개 변수*/
function fnc(name, region){ // #2 var name="홍길동"; var region="서울" => #5 var name="홍길영"; var region="부산"
	document.write("저의 이름은 "+name+"이며 사는 곳은 "+region+"입니다.", "<br>"); //#3 #6
}
fnc("홍길동", "서울"); //#1
fnc("홍길영", "부산"); //#4

function ch_img($img, $txt){
	document.write("<img src='img/"+$img+"' alt='"+$txt+"'>", "<br>");
}
ch_img("ace.png", "카드 앞면");
ch_img("card.png", "카드 뒷면");

function imgChange(){
	var $ch_coffee = document.getElementById("coffee");
	$ch_coffee.setAttribute("src", "img/coffee-gray.jpg");
}

/*클릭 시 이미지 교체*/
var $arr_pic = ["img/pic-1.jpg", "img/pic-2.jpg", "img/pic-3.jpg", "img/pic-4.jpg"];

var n = 0; //초기값 선언
var $pic = document.getElementById("pic");
function nextImg(){
	console.log(n);

	if(n >=$arr_pic.length-1){  //n>=3
		n=0; //클릭이라는 행동을 취한다면 다음번 클릭했을떄, n=0 가져와야 "img/pic-1.jpg"를 호출할 수 있기 때문에 조건문을 구성 
		$pic.setAttribute("src", $arr_pic[n]);
	}else{ //n = 0, 1, 2
		n++;
		$pic.setAttribute("src", $arr_pic[n]); // $arr_pic[1] => "img/pic-2.jpg"
	}

/*
	n++;  //n=n+1 => 1 => 2 => 3 => 0
	console.log(n);  //1, 2, 3, 0 
	$pic.setAttribute("src", $arr_pic[n]);
							//$arr_pic[1] => "img/pic-2.jpg"
							//$arr_pic[2] => "img/pic-3.jpg"
							//$arr_pic[3] => "img/pic-4.jpg"
							//$arr_pic[0] => "img/pic-1.jpg"
							//최종 n 값 = 1
							//최종 n 값 = 2
							//최종 n 값 = 3
							//최종 n 값 = 0
	if(n>=$arr_pic.length-1){  //3>=3
		n = -1; //다음번에 클릭했을 때 n=0 값으로 가져와서 배열 데이터의 첫번째 인덱스로 접근해서 호출해야하기 때문
	}
*/

}

function prevImg(){
	console.log(n); // 3, 2, 1, 0, 3, 2, 1, 0 ......
	n--; //n=n-1 => -1
	if(n<0){
		n = $arr_pic.length-1 //3
	}
	$pic.setAttribute("src", $arr_pic[n]);
}

/*return 참조변수 : 함수 구문 내부에서 연산된 값을 함수 호출문에 저장할 때 사용*/
 function calc($num1, $num2){ //2번 $num1=100, $num=200  , 5번
 	var $total = $num1 + $num2; //3번 
 	return $total; //4번 함수 구문 내부에서 연산된 값을 돌려주는데 calc()라는 곳에 저장
 }
 var $result = calc(100, 200); //1번,  6번 var $result = 300
 document.write("두 수의 총 합계는 "+$result, "<br>");  //7번
//브라우저가 실행되는 순간 함수문을 호출 


function importImg($img){  //2번, 5번
	var $rstImg = $img;  //3번
	return $rstImg;  //4번
}
var $final_img = importImg("<img src='img/tree-1.jpg'>"); //1번,  6번
document.write($final_img, "<br>");  //7번 

function importPic($pic1, $pic2){
	var $rstPic = $pic1 + $pic2;
	return $rstPic;
}
var $finalPic = importPic("<img src='img/tree-2.jpg'>", "<img src='img/tree-3.jpg'>");
document.write($finalPic, "<br>");

//return문 : 함수 구문 내부에서 진행을  중단하고 더이상 진행하지 않도록 함수구문에서 빠져나오는 역할(반복문에서 break와 동일)
function testTxt($name, $region){
	document.write("성명 : "+$name, "<br>");
	return; //함수 구문 내부에서는 상단의 로딩 파트까지만 출력
	document.write("지역 : "+$region, "<br>");
}
testTxt("정지용", "서울");


//재귀함수 : 함수문 호출한 후 내부의 함수호출문에 의해서 반복적으로 실행되는 함수(내부에서는 본인을 다시 호출)

var $k = 0;
function selfTest(){  //2번
	$k++;  //3번 $k 값을 하나씩 증가시킨다.
	console.log("재귀함수 테스트 : "+$k);  //4번 $k 값을 출력
	if($k>=10){  //5번 $k 값이 조건에 부합한지를 확인
		return;
	}
	selfTest();  //6번 함수를 호출(본인을 호출)
}
selfTest();   //1번 최초 함수문 호출 

var $arr_tree = ["tree-1.jpg", "tree-2.jpg", "tree-3.jpg", "tree-4.jpg", "tree-5.jpg", "tree-6.jpg"];
var $n = 0;  //인덱스 번호에 대한 초기값 

function treeImg(){
	document.write("<img src='img/"+$arr_tree[$n]+"'>");  //$n = 0, 1, 2, 3, 4, 5  
	$n++;  //$n = 1, 2, 3, 4, 5, 6
	if($n>=$arr_tree.length){  //$n=6에 도달했을 때 
		return;
	}
	treeImg();
}
treeImg();



/*전역변수와 지역변수 */
//전역변수 : 함수구문 외부에서 선언하여 전체(함수구문 내부 및 외부 전체)에 영향을 주는 변수 
//지역변수 : 함수구문 내부에서 선언하여 함수 내부에서만 영향을 주는 변수(지역변수의 값을 외부로 전달하기 위해서는 반드시 return 참조변수가 필요)
var $num_01 = 400;  //전역변수
function varNum(){
	var $num_01 = 600;  //지역변수
	document.write("지역변수의 값은 "+$num_01, "<br>"); //지역변수에 대한 값을 출력 = 600
} 
varNum();
document.write("최종 출력 값은 "+$num_01, "<br>");  //전역변수에 대한 값을 출력 = 400



//전역변수와 지역변수를 활용한 이미지 넣기 
var $main = document.getElementById("main_img");  //전역변수
var $thumb = document.getElementById("thumb");  //전역변수
var $arr_img = ["tree-1.jpg", "tree-2.jpg", "tree-3.jpg"];  //전역변수
$main.innerHTML = "<img src='img/"+$arr_img[0]+"'>";
function chgImg(){
	var $arr_img = ["tree-1-thumb.jpg", "tree-2-thumb.jpg", "tree-3-thumb.jpg"];  //지역변수
	$thumb.innerHTML = "<img src='img/"+$arr_img[0]+"'>"+"<img src='img/"+$arr_img[1]+"'>"+"<img src='img/"+$arr_img[2]+"'>";
}
chgImg();