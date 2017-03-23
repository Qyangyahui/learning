$(document).ready(function () {
    $("#myfree").click(function () {
        $.ajax({
            type: "GET",
            cache: false,
            url: "http://test.huaifuwang.com/snsjs/index.php?s=/home/sns/mSendFlower",
            dataType: "json",
            success: function (json) {
               console.log(json);
                 $("#boxbg").css("display", "block");
               var html ='';
               html = "<div id='tanchuang'>"+ json.msg + '<div>';
               $('body').append(html);
                if (!json.code) {
                    piaoluo();
                    $("#tanchuang").css("display","block");
                    $("#boxbg").css("display","block");
                    setTimeout(function () {
                        $("#tanchuang").css("display","none");
                    }, 2000);

                } else { 
                    $("#tanchuang").css("display","block").html('今天已送过');
                     setTimeout(function () {
                        $("#tanchuang").css("display","none");
                    }, 2000);                       
                }
            }
        });
    });

    $("#mycharge").click(function () {
        $("section").css("display", "block");
    });

});