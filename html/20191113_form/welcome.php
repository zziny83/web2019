<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="UTF-8">
	<title>welcome</title>
</head>
<body>
	<? 
	 $name = $_GET["myname"];   
	 $email = $_GET["email"];
	?>
	<!-- 오른쪽의 값을 왼쪽 변수에 적용시킨다 -->

	이름 : <?echo $name; ?>님 반갑습니다.<br>
	이메일 : <?echo $email;?>

</body>
</html>