


	
	
$(function(){

	/*메뉴 네비게이션*/
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
	

	/*content1 이미지 슬라이드*/

	function slide(){
		$(".slide ul").animate({top:-500+"px"},1000,function(){
		  $(".slide ul").append($(".slide ul li").first())
		  $(".slide ul").css({top:0})
			})
	  }
	  setInterval(slide,3000);


	/*content2 prev, next 버튼*/
	
	$("#rightImg li").each(function(indexNum){
		$(this).css("left", (220*indexNum)-220); // 맨 마지막 이미지를 맨 앞으로 가져옴
	});
	
	$(".prev").click(function(){
		$("#rightImg li").each(function(indexNum){
			let nowLeft = parseInt($(this).css("left"));
			console.log(nowLeft);
			let moveLeft =nowLeft + 220;
			$(this).stop(true,true).animate({left:moveLeft},1000,function(){
				if(moveLeft >= 880){ //이미지가 하나씩 모두 오른쪽으로 185이동하여 맨 처음 
					$(this).css("left",-220);
				}
				});
				// 0:-220, 1:0, 2:220 3:440, 4:660, 5:880
			});
		});
		$(".next").click(function(){
			$("#rightImg li").each(function(indexNum){
			let nowLeft = parseInt($(this).css("left"));
				console.log(nowLeft);
			let moveLeft =nowLeft - 220;
				$(this).stop(true,true).animate({left:moveLeft},1000,function(){
				if(moveLeft <= -440){ //이미지가 하나씩 모두 오른쪽으로 220이동하여 맨 처음 
				$(this).css("left",880);
					}
				});
			});
		});


	/*content2 이미지 opacity*/
	$("#con_Img1 img, #con_Img2 img, #con_Img3 img, #con_Img4 img").css({opacity: 0.8});
            
	$("#con_Img1 img,#con_Img2 img,#con_Img3 img,#con_Img4 img").mouseenter(function(){
		$(this).css({opacity:1});
		$(this).css({backgroundColor:black});
	});
	$("#con_Img1 img, #con_Img2 img, #con_Img3 img, #con_Img4 img").mouseleave(function(){
		$(this).css({opacity:0.8});
	});


	/*content5 video slide*/
	function slide(){
	  $(".content5 ul").animate({left:-420+"px"},1000,function(){
		$(".content5 ul").append($(".content5 ul li").first())
		$(".content5 ul").css({left:0})
  		})
	}
	setInterval(slide,3000);
});

