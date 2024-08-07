


	/*메뉴 네비게이션*/
	
$(function(){
	$("#gnb>li").mouseenter(function(){
		$(this).children("ul").stop().slideDown();
		$(this).addClass("highlight");
	});
	$("#gnb>li").mouseleave(function(){
		$("#gnb>li").children("ul").stop().slideUp();
		$(this).removeClass("highlight");
	});

	/*팝업창*/
	$("#header h1").click(function(){
		$("#popupImg img").show();
		
	});
	$("#popupImg a").click(function(){
		$("#popupImg img").hide();
	});
	

	/*이미지 슬라이드*/	
	$(".slider").each(function(indexNum){
		 $(this).css({ left: 1300 * indexNum + "px" });
	});
	
	setInterval(function(){
		$(".slider").each(function(){
			let nowLeft = parseInt($(this).css("left"));
			let moveLeft = nowLeft - 1500;
			$(this).animate({left:moveLeft},1000,function(){
				if(moveLeft ==-4500 ){
					$(this).css("left", 0);
				}
			});
		});
	},3000);

	/*이미지 opacity*/
	$("#con_Img1 img, #con_Img2 img, #con_Img3 img, #con_Img4 img").css({opacity: 0.8});
            
	$("#con_Img1 img,#con_Img2 img,#con_Img3 img,#con_Img4 img").mouseenter(function(){
		$(this).css({opacity:1});
	});
	$("#con_Img1 img, #con_Img2 img, #con_Img3 img, #con_Img4 img").mouseleave(function(){
		$(this).css({opacity:0.8});
	});
});

