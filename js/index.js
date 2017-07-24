/**
 * Created by a on 2017/3/29.
 */
$(function(){
    $(".yk_click1").on("click","li",function(){
        $(this).attr("class","fa fa-star").prevAll().attr("class","fa fa-star");
        $(this).nextAll().attr("class","fa fa-star-o");
        var index=$(this).index();
        console.log(index);
        switch (index){
            case 0: $(".yk_rt1").text("很差");
                break;
            case 1: $(".yk_rt1").text("差");
                break;
            case 2: $(".yk_rt1").text("一般");
                break;
            case 3: $(".yk_rt1").text("好");
                break;
            case 4: $(".yk_rt1").text("非常好");
            break;
        }

        if(index<=1){
            $(".yk_rs11").show();
            $(".yk_rs12").hide();
        }else  if(index<=4){
            $(".yk_rs11").hide();
            $(".yk_rs12").show();
        }
    });
    $(".yk_rs11").on("click","li",function(){
                
              //监听index值，发生改变就恢复原来状态；
    
              //进来先判断  是否点击，点击就恢复原来状态，原来状态就点击
              var dis=$(this).children().css("color");
              if(dis==="rgb(255, 0, 0)"){
                  $(this).css("border-color","#666");
                  $(this).children().css("color","#666");
              }else if(dis==="rgb(102, 102, 102)"){
                  $(this).css("border-color","red");
                  $(this).children().css("color","red");
              }
     });      

    $(".yk_rs12").on("click","li",function(){
        var dis=$(this).children().css("color");
        if(dis==="rgb(255, 0, 0)"){
            $(this).css("border-color","#666");
            $(this).children().css("color","#666");
        }else if(dis==="rgb(102, 102, 102)"){
            $(this).css("border-color","red");
            $(this).children().css("color","red");
        }
    });
    $(".yk_click2").on("click","li",function(){
        $(this).attr("class","fa fa-star").prevAll().attr("class","fa fa-star");
        $(this).nextAll().attr("class","fa fa-star-o");
        var index=$(this).index();
        console.log(index);
        switch (index){
            case 0: $(".yk_rt2").text("很差");
                break;
            case 1: $(".yk_rt2").text("差");
                break;
            case 2: $(".yk_rt2").text("一般");
                break;
            case 3: $(".yk_rt2").text("好");
                break;
            case 4: $(".yk_rt2").text("非常好");
                break;
        }
        if(index<=1){
            $(".yk_rs21").show();
            $(".yk_rs22").hide()
        }else if(index<=4){
            $(".yk_rs21").hide();
            $(".yk_rs22").show();
        }
    });
    $(".yk_rs21").on("click","li",function(){
        var dis=$(this).children().css("color");
        if(dis==="rgb(255, 0, 0)"){
            $(this).css("border-color","#666");
            $(this).children().css("color","#666");
        }else if(dis==="rgb(102, 102, 102)"){
            $(this).css("border-color","red");
            $(this).children().css("color","red");
        }
    });
    $(".yk_rs22").on("click","li",function(){
        var dis=$(this).children().css("color");
        if(dis==="rgb(255, 0, 0)"){
            $(this).css("border-color","#666");
            $(this).children().css("color","#666");
        }else if(dis==="rgb(102, 102, 102)"){
            $(this).css("border-color","red");
            $(this).children().css("color","red");
        }
    });
});