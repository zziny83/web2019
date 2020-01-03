$(document).ready(function(){
	$(".more_frame button").click(function(){
		$.ajax({
		url:"snapshot_sub.html",
			type:"post",
			success:function(result){
				$(".sp_second").html(result);
			}
		});
		$(this).closest(".more_frame").hide();
		$(".sp_second").show();
	});
});