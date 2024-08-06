
$(function(){
	$("#gnb>li").mouseenter(function(){
		$(this).children("ul").stop().slideDown();
		$(this).addClass("highlight");
	});
	$("#gnb>li").mouseleave(function(){
		$("#gnb>li").children("ul").stop().slideUp();
		$(this).removeClass("highlight");
	});

	/*메뉴 네비게이션*/
	
	$("#header h1").click(function(){
		$("#popupImg img").show();
		
	});
	$("#popupImg a").click(function(){
		$("#popupImg img").hide();
	});
	
	/*팝업창*/
	
	$(".slider").each(function(indexNum){
		 $(this).css({ left: 1300 * indexNum + "px" });
	});
	
	setInterval(function(){
		$(".slider").each(function(){
			let nowLeft = parseInt($(this).css("left"));
			let moveLeft = nowLeft - 1300;
			$(this).animate({left:moveLeft},1000,function(){
				if(moveLeft ==-3900 ){
					$(this).css("left", 0);
				}
			});
		});
	},3000);
	
	/*이미지 슬라이드*/
	
	$(".contentNum3 li img").mouseenter(function(){
			$(this).css({border:"5px solid #FF87BE	", borderRadius:"0"});
	});
	$(".contentNum3 li img").mouseleave(function(){
			$(this).css({border:"none", borderRadius:"10px"});
	});
});
