/*Javascript - DOM*/
window.onload=function(){    //원도우라는 최상위 객체가 로딩이 완료되면 function(함수문)을 실행하라는 의미
	var $firstObj = document.getElementById("title");
	console.log($firstObj);

	$firstObj.style.color="red";  //<h2 id="title" style="color:red;">문서객체 모델 테스트</h2>
	$firstObj.style.backgroundColor="#ffffaa"; //<h2 id="title" style="color:red; background-color="#ffffaa";>문서객체 모델 테스트</h2>

	$firstObj.innerHTML="<span>더보기</span>"  //<h2 id="title" style="color:red; background-color="#ffffaa";><span>더보기</span></h2>
	$firstObj.innerHTML="<span>감추기</span>"  //<h2 id="title" style="color:red; background-color="#ffffaa";><span>감추기</span></h2>

	/*태그이름으로 접근하여 스타일을 부여하는 과정*/
	var menuObj = document.getElementById("menu");
	console.log(menuObj);
	/*요소(element)명 기준으로 선택자를 정할 때 getElementsByTagName("p")[인덱스번호]*/
	menuObj.getElementsByTagName("p")[1].style.background="#ffaaff";
	menuObj.getElementsByTagName("p")[3].style.color="blue";
	/*클래스명을 기준으로 선택자를 정할때 getElementsByClassName("list")[인덱스번호]*/
	menuObj.getElementsByClassName("list")[0].style.fontSize="32px";
	menuObj.getElementsByClassName("list")[2].style.fontStyle="italic";


	/*근거리 선택자*/
	var $mList = document.getElementsByClassName("m_list")[1];
	console.log($mList);

	var $mList_parent = $mList.parentNode;  //parentNode는 선택자의 바로 상위 부모만을 선택하여 반환(노드(엔터값 포함)는 무시됨) 
	console.log($mList_parent);
	$mList_parent.style.backgroundColor="#aaffaa";

	var $mList_children = $mList_parent.children;  //children은 선택자의 하위 자식요소를 모두 반환(HTML 코딩 상의 엔터값이 무시. 실제 요소명만을 자식으로 저장)
	console.log($mList_children);
	$mList_children[3].style.listStyle="none";

	var $mList_childNodes = $mList_parent.childNodes; //childNodes는 선택자의 하위 요소를 모두 반환(HTML 코딩 상의 엔터값까지 자식요소로 저장. 엔터값에 위한 공백도 자식으로 저장)
	console.log($mList_childNodes);
	$mList_childNodes[3].style.fontWeight="bold";

	var $f_child = $mList_parent.firstChild;  //노드라는 개념 적용 상 첫번째 엔터값을 지정
	console.log($f_child);

	var $l_child = $mList_parent.lastChild;  //노드라는 개념 적용 상 마지막 번째 엔터값을 지정
	console.log($l_child);

	var $prevSibling = $mList_children[2].previousSibling.previousSibling;  //노드라는 개념상 엔터값을 지정하고 그 이전 노드인 <li>를 선택하여 반환(product)
	console.log($prevSibling);

	$prevSibling.style.borderBottom="2px dashed #ff0000";

	var $nextSibling = $mList_children[2].nextSibling.nextSibling;
	console.log($nextSibling);
	$nextSibling.style.background="red";


	/*속성 변경 및 삭제, 추가*/
	var $chImg = document.getElementById("ch_img");
	var $chImg_attr_src = $chImg.src;
	console.log($chImg_attr_src); //값의 절대 경로

	var $chImg_getAttr_src = $chImg.getAttribute("src");
	console.log($chImg_getAttr_src); //실제로 존재하는 속성값만을 반환

	$chImg.setAttribute("src", "img/girl.png");  //해당하는 속성명의 속성 값을 변경하겠다는 의미

	$chImg.setAttribute("alt", "소녀 이미지");

	$chImg.setAttribute("class", "img01 girl_img");  //기존에 해당하는 속성명이 없다면 속성명을 붙이고, 속성값을 넣어준다.

	$chImg.setAttribute("class", "");  //기존에 선언된 속성에 대한 속성값을 삭제


	/*선택 요소 기준의 내부 문서의 내용을 변경, 생성, 삭제 */
	var $sec_01 = document.getElementById("section_01");
	console.log($sec_01);

	$sec_01.innerHTML = "<p>상세 페이지</p>"; // 기존 하위 자식 요소를 변경
	$sec_01.innerHTML = "";  // 기존 하위 자식 요소를 모두 삭제 
	$sec_01.innerHTML = "<h4>상세 페이지 내용</h4>";


	var $card = document.getElementById("card_img");
	$card.onclick=function(){
		$card.setAttribute("src", "img/card.png");
		$card.setAttribute("alt", "카드 뒷면");
	}
	$card.onmouseover=function(){
		$card.setAttribute("src", "img/card.png");
		$card.setAttribute("alt", "카드 뒷면");
	}
	$card.onmouseout=function(){
		$card.setAttribute("src", "img/ace.png");
		$card.setAttribute("alt", "카드 앞면");
	}

}