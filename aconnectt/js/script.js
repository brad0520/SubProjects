$(function(){
    // 메뉴
    $("ul.gnb>li").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })

    // 슬라이드
    let slideIdx = 0;
    setInterval(function(){
        if(slideIdx<1){
            slideIdx++;
        }else{
            slideIdx = 0;
        }
        $(".slide ul").animate({left: -100*slideIdx +'%'}, 500);

    }, 3000)

    // 탭클릭
    $(".notice>h2").click(function(){
        $(".notice>h2").removeClass("on").next().removeClass("on");
        $(this).addClass("on").next().addClass("on");
    })

    // 모달
    $("#popup").click(function(){
        $(".modal_bg").fadeIn();
    });
    $("button").click(function(){
        $(".modal_bg").fadeOut();
    });








})