// 始终让模态框居中显示
var timer;
window.onload = function (){
  timer=setInterval(animat,3000);

    var sightHeight =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
      var top = (sightHeight-350)/2;
      $(".codeAsk-succsess").css({
           top:top+"px"
      });
      $(".codeAsk-false").css({
        top:top+"px"
      });
      // 弹窗控制
      $(".section3").click(function(){
        var _phone = $("#tel").val();

        if($("#tel").val() == "" ){
          $(".hiddenBody").css({
            "display":"block"
          });
          $(".codeAsk-false").css({
            "display":"block"
          });
          return false;
        }else if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(_phone))){
          $(".hiddenBody").css({
            "display":"block"
          });
          $(".codeAsk-false").css({
            "display":"block"
          });
          return false;
        }
        // 验证成功
          $(".hiddenBody").css({
            "display":"block"
          });
          $(".codeAsk-succsess").css({
            "display":"block"
          });
      });
      
      // 第二个按钮弹窗控制
      $(".timeGet").click(function(){
        var _phone = $("#tel").val();
        if($("#tel").val() == "" ){
          $(".hiddenBody").css({
            "display":"block"
          });
          $(".codeAsk-false").css({
            "display":"block"
          });
          return false;
        }else if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(_phone))){
          $(".hiddenBody").css({
            "display":"block"
          });
          $(".codeAsk-false").css({
            "display":"block"
          });
          return false;
        }
          // 验证成功
          $(".hiddenBody").css({
            "display":"block"
          });
          $(".codeAsk-succsess").css({
            "display":"block"
          });
    });

      //  成功窗口的按钮
      $(".closeMessage").click(function(){
          $(".hiddenBody").css({
            "display":"none"
          });
          $(".codeAsk-succsess").css({
            "display":"none"
          });
      })
        //  失败窗口的按钮
        $(".closeMessage-false").click(function(){
          $(".hiddenBody").css({
            "display":"none"
          });
          $(".codeAsk-false").css({
            "display":"none"
          });
      })
    
    
   }
   // 添加动画样式
 function animat(){
    $(".section3 img").addClass("animated");
    $(".section3 img").addClass("pulse");
    $(".section3 img").addClass("infinite");
  }