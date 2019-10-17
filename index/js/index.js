//bannner背景图轮播
$(
    function(){
         var count = -1;
  $(".header .banner .carousel").eq(0).css("height",$(window).height())
  $(".header .banner .carousel").eq(0).css("display","block")
  setInterval(function () {
      count++;
      if (count >= 4) {
          count = 0;
        }
    $(".header .banner .carousel").eq(count).css("height",$(window).height())
    $(".header .banner .carousel").eq(count-1).css("display","none")
    $(".header .banner .carousel").eq(count).css("display","block")
  }, 3000)
  
    }
)
// $(
//     function(){
//         $(".header .nav img").click(function(){console.log("11111111")})
//     }
// )
// $( function (){
//     var  topScroll = $(".aboutMe .container .background-img img").scrollTop();
//     var topPin = $('.aboutMe .container .background-img img').height();    
//     document.getElementById("skillimg").offsetTop = topScroll + topPin
//     console.log(topScroll + topPin)
// });


// 联系我弹窗
$(function(){
    $(".conceaQQ").on("click",function(event){
        event.preventDefault();
    })

    $(".conceaWeChat").on("click",function(event){
        event.preventDefault();
    })


    var clickQQ = false;
    var clickWeChat = false;
    $(".conceaQQ").click(function(){
        $(".contectMe .container .externalLinks .WeQQ").css("display","block")
        $(".contectMe .container .externalLinks .WeQQ .clickQQ").css("display","block")
        $(".btnQQ img").css("display","block")
    })

    $(".conceaWeChat").click(function(){
        $(".contectMe .container .externalLinks .WeQQ").css("display","block")
        $(".contectMe .container .externalLinks .WeQQ .clickWeChat").css("display","block")
        $(".btnWeChat img").css("display","block")
    })

    $(".btnWeChat").click(function(){
        $(".contectMe .container .externalLinks .WeQQ").css("display","none")
        $(".contectMe .container .externalLinks .WeQQ .clickWeChat").css("display","none")
        $(".btnWeChat img").css("display","none")
        })
    $(".btnQQ").click(function(){
        $(".contectMe .container .externalLinks .WeQQ").css("display","none")
        $(".contectMe .container .externalLinks .WeQQ .clickQQ").css("display","none")
        $(".btnQQ img").css("display","none")
    })
    // .contectMe .container .externalLinks .WeQQ .btn
})

// 技能切换

$(function(){
    $(".choiceskill1").on("click",function(event){
        event.preventDefault();
    })

    $(".choiceskill2").on("click",function(event){
        event.preventDefault();
    })

    $(".choiceskill3").on("click",function(event){
        event.preventDefault();
    })


    $(".choiceskill").each(function(index){
        $(this).click(function(){
            $(".allskill").removeClass("allskill")
            $(".choiceskill").eq(index).addClass("allskill")
        })
    })



    $(".choiceskill1").click(function(event){
        $(".skill").css("display","inline")
    })
    $(".choiceskill2").click(function(){
        $(".skillQ").css("display","inline")
        $(".skillH").css("display","none")
    })
    $(".choiceskill3").click(function(){
        $(".skillH").css("display","inline")
        $(".skillQ").css("display","none")
    })
})


// 宽度小于1000px
$(function(){
    var nav

    if ($("body").width() < 1000){

        // 导航栏模块
        $(".ue-bar").css("display", "none")
        $(".nav img").css("display", "block")
        $(".nav img").css("z-index", "301")
        $(".header .navMenu").css("z-index","300")
        nav = "false"
        $(".nav img").on("click", function(event){
            event.preventDefault();
            if (nav == "false"){
                $(".header .navMenu").css("display","block")
                nav = "true"
            }else if(nav == "true"){
                $(".header .navMenu").css("display","none")
                nav = "false"
            }
        })

        // 个人经历&项目经验
        $(".arrowpart").css("display", "none")
        $(".rightArea .exCon").css("margin-left", "10%")
        $(".workYear span").css("margin-left","10%")
        $(".workYear span").css("font-size","13px")

        $(".skillShow .skillShow-Warp .skillShow-inner .skilllist li").css("font-size", "50%")
        $(".skillShow .skillShow-Warp .skillShow-inner .skilllist").css("height", "50px")
        $(".skillShow .skillShow-Warp .skillShow-inner .skilllist").css("margin-top", "-58px")
        $(".contectMe .container .externalLinks .WeQQ .btn").css("margin-top","-12%")

        //联系我弹窗尺寸
        $(".contectMe .container .externalLinks .WeQQ .clickQQ,.clickWeChat").css("bottom","35%")
        $(".contectMe .container .externalLinks .WeQQ .clickQQ,.clickWeChat").css("left","30%")
        $(".contectMe .container .externalLinks .WeQQ .clickQQ,.clickWeChat").css("right","30%")
        $(".btnQQ img").css("margin-top","-10%")
        $(".btnWeChat img").css("margin-top","-20%")
    }
})