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
        clickQQ = true
    })

    $(".conceaWeChat").click(function(){
        $(".contectMe .container .externalLinks .WeQQ").css("display","block")
        $(".contectMe .container .externalLinks .WeQQ .clickWeChat").css("display","block")
        clickWeChat = true
    })

    $(".btn").click(function(){
        if (clickQQ){
            $(".contectMe .container .externalLinks .WeQQ").css("display","none")
            $(".contectMe .container .externalLinks .WeQQ .clickQQ").css("display","none")
            clickQQ = false
        }else if(clickWeChat){
            $(".contectMe .container .externalLinks .WeQQ").css("display","none")
            $(".contectMe .container .externalLinks .WeQQ .clickWeChat").css("display","none")
            clickWeChat = false
        }
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
        console.log(index)
    })



    $(".choiceskill1").click(function(event){
        $(".skill").css("display","inline")
        console.log(event)
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