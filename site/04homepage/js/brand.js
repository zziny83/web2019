$(document).ready(function(){
	$(".bingHistory li").click(function(){
		var $index = $(this).index();
		$(".nowhistory img").hide();
		$(".nowhistory img").eq($index).fadeIn();
		return false;
	});
});