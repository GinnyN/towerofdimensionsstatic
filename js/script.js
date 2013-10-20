$(document).on("ready", function(){
		


	$("#menu-link").on("click",function(){
		$(".menu").css("width","15em");
		setTimeout(function(){$(".pusher").on("click", function(){
			$(".menu").css("width","0");
			$(this).off();
		})}, 10);
	});

	$("#progress-link").on("click",function(){
		$(".progress").css("width","17em");
		setTimeout(function(){$(".pusher").on("click", function(){
			$(".progress").css("width","0");
			$(this).off();
		})}, 10);
	});

	$("#dashboard-menu").on("click",function(){
		$(".content").hide();
		$("#dashboard").show();
	});

	$("#characters-menu").on("click",function(){
		$(".content").hide();
		$("#characters").show();
	});
});