$(document).ready(function(){
	$.ajax({
		url:"coverstory.html",
		type:"post",
		success:function(result){
			$("#content").html(result);
		}
	});

	$("nav li:nth-child(1)").click(function(){
		$.ajax({
		url:"coverstory.html",
			type:"post",
			success:function(result){
				$("#content").html(result);
			}
		});
		$("nav li").removeClass("active");
		$(this).addClass("active");
		return false;

	});
	$("nav li:nth-child(2)").click(function(){
		$.ajax({
		url:"characters.html",
			type:"post",
			success:function(result){
				$("#content").html(result);
			}
		});
		$("nav li").removeClass("active");
		$(this).addClass("active");
		return false;

	});

	$("nav li:nth-child(3)").click(function(){
		$.ajax({
		url:"snapshot.html",
			type:"post",
			success:function(result){
				$("#content").html(result);
			}
		});
		$("nav li").removeClass("active");
		$(this).addClass("active");
		return false;

	});

	$("nav li:nth-child(4)").click(function(){
		$.ajax({
		url:"epilogue.html",
			type:"post",
			success:function(result){
				$("#content").html(result);
			}
		});
		$("nav li").removeClass("active");
		$(this).addClass("active");
		return false;

	});
});