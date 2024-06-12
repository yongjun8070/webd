$(function(){
    $(".menu>ul>li").mouseover(function(){
        $(".submenu").css({opacity:1})
        $(".allmenu").css({opacity:1})
    });
    $(".menu>ul>li").mouseout(function(){
        $(".submenu").css({opacity:0})
        $(".allmenu").css({opacity:0})
    })
})

setInterval(function(){
    
    $(".slidewrap").animate({opacity:1})
    $(".slidewrap").delay(1000)
    $(".slidewrap").animate({opacity:0})
    $(".slidewrap").delay(1000)
    $(".slidewrap").animate({marginLeft:-1200})

    $(".slidewrap").animate({opacity:1})
    $(".slidewrap").delay(1000)
    $(".slidewrap").animate({opacity:0})
    $(".slidewrap").delay(1000)
    $(".slidewrap").animate({marginLeft:-2400})

    $(".slidewrap").animate({opacity:1})
    $(".slidewrap").delay(1000)
    $(".slidewrap").animate({opacity:0})
    $(".slidewrap").delay(1000)
    $(".slidewrap").animate({marginLeft:0})
})
$(function(){
    $(".ntab").click(function(){
        $(".gallery").hide();
        $(".notice").show();
        $(".gtab>p").css({"background-color":"white"})
        $(".gtab>p").css({"color":"black"})
        $(".ntab>p").css({"background-color":"black"})
        $(".ntab>p").css({"color":"white"})
    });
    $(".gtab").click(function(){
        $(".gallery").show();
        $(".notice").hide();
        $(".ntab>p").css({"background-color":"white"})
        $(".ntab>p").css({"color":"black"})
        $(".gtab>p").css({"background-color":"black"})
        $(".gtab>p").css({"color":"white"})
    })
})
$(function(){
    $(".notice>ul>li:nth-child(1)").click(function(){
        $(".popup").show();
        })
        $(".button").click(function(){
            $(".popup").hide(); 

        })
})
