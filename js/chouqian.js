 $(document).ready(function () {
    $("#mychou").click(function () {
      $.ajax({
        type: "GET",
        cache: false,
        url: "http://test.huaifuwang.com/snsjs/index.php?s=/home/sns/qiuQian",
        dataType: "json",
        success: function (json) {
          console.log(json);
          if (json.code == 1) {
              
              $("#mybg").addClass("test");
              $("#mysn").css("display", "block");
              setTimeout(function(){
                  $("#boxbg").css("display", "block");
                  $("#mysuccess").html("抽签失败");
                  $("#qiancontent").html('今日已经抽取');
                  $('#myxy').click(function(){
                    $("#boxbg").css('display','none');
                  })
              },1200)
          };
          if (json.code == 0) {
             $("#mybg").addClass("test");
              $("#mysn").css("display", "block");
              setTimeout(function(){
              var mycontent = ['第一个抽签内容','第二个抽签内容','第三个抽签内容','第四个抽签内容','第五个抽签内容'];
              var e = Math.floor(Math.random()*5);
              console.log(e);
              var myqiancontent = mycontent[e];
                  $("#boxbg").css("display", "block");
                  $("#mysuccess").html("抽签成功");
                  $("#qiancontent").html(myqiancontent);
                  $('#myxy').click(function(){
                    $("#boxbg").css('display','none');
                  })
              },1200) 
            alert('test0');
             
          };
          if (json.code == -1) {
              $("#mybg").addClass("test");
              $("#mysn").css("display", "block");
              setTimeout(function(){
                  $("#boxbg").css("display", "block");
                  $("#mysuccess").html("抽签失败");
                  $("#qiancontent").html('积分不足');
                  $('#myxy').click(function(){
                    $("#boxbg").css('display','none');
                  })
              },1200)
            // alert('test-1');
          };
        }
      });
    });
  });