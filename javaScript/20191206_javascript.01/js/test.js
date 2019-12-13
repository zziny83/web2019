var $num01 = 36
var $num02 = 12
var sum = $num01 + $num02;
document.write("sum =" +sum, "<br>");

var substract = $num01 - $num02;
document.write("substract =" +substract, "<br>");


var multiply = $num01 * $num02;
document.write("multiply =" +multiply, "<br>");

var multiply = $num01 / $num02;
document.write("multiply =" +multiply, "<br>");

var reminder = $num01 % $num02;
document.write("reminder =" +reminder, "<br>");



var $num03 = 36
var $num04 = 12
var $result = $num03+=$num04
document.write("$result(+=) = " +$result, "<br>");
var $result = $num03-=$num04
document.write("$result(-=) = " +$result, "<br>");
var $result = $num03*=$num04
document.write("$result(*=) = " +$result, "<br>");
var $result = $num03/=$num04
document.write("$result(/=) = " +$result, "<br>");
var $result = $num03%=$num04
document.write("$result(%=) = " +$result, "<br>");




var $height = prompt("브라우저의 세로 값(px)", "");
var $width = prompt("브라우저의 가로 값(px)", "");
var result = $height*$width;
document.write("브라우저의 총 면적(px) : "+result, "<br>" );



var $t = "<table border='1'>";
$t+="<tr><td>1</td><td>2</td><td>3</td></tr>"
$t+="<tr><td>4</td><td>5</td><td>6</td></tr>"
$t+="</table>"
document.write($t);


var $num_in = prompt("네 자리 이상의 수를 입력하세요", "0000");
if($num_in>=1000){
	if($num_in%7 == 0){
		document.write("입력한 "+$num_in+ "은(는)7의 배수입니다.", "<br>");
	}else{
		document.write("입력한 "+$num_in+ "은(는) 7의 배수가 아닙니다.", "<br>");
	}
}


var $bx_num = 1;
for($bx_num = 1; $bx_num<=10; $bx_num++){
	document.write("<div class='boxs'></div>");
}

document.write("<div class='clear'></div>");

var $bx_limit =  prompt("보여줄 박스의 개수를 입력하세요.", "");
for($i = 0; $i<$bx_limit; $i++){
	document.write("<div class='box_bl'></div>");
}
