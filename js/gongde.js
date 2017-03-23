  $(document).ready(function () {
        $.ajax({
            type: "GET",
            cache: false,
            url: "http://test.huaifuwang.com/snsjs/index.php?s=/home/sns/getMygongde",
            dataType: "json",
            success: function (json) {
                console.log(json);
                console.log(json[1].length);
                console.log(json[0].imgurl);
                console.log('test');
                console.log(json[0].username);
                $('#userhead').attr('src', json[0].imgurl);
                $('#username').html(json[0].username);
                $('#usergongde').html('功德总数：' + json[2]);


                for (var i = 0; i < json[1].length; i++) {

                    // 时间格式转换
                    var mytime = json[1][i].create_time;
                    console.log(mytime);
                    var date = new Date(mytime * 1000);
                    Y = date.getFullYear() + '-';
                    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    D = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
                    h = date.getHours() < 10 ? '&nbsp;' + '0' + date.getHours() + '&nbsp;' + ':' + '&nbsp;' : '&nbsp;' + date.getHours() + '&nbsp;' + ':' + '&nbsp;';
                    m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                    var timestr = Y + M + D + "&nbsp;&nbsp" + h + m;

                    // 添加列表
                    var html = '<li>' + '<div class="myname">' + ' <p  class="mynicheng">' + json[1][i].type + '</p>' + ' <p  class="mytime">' + timestr + '</p>' + '</div>' + '<div class="gongde">' + '<p  class="myjifen">' + json[1][i].integral + '</p>' + '</div>' + '<div style="clear:both;"></div></li>';
                    $('ul').append(html);
                    // 抽签、上香、送花、心愿控制以及积分颜色
                    if (json[1][i].type == 1) { 
                        var pro = document.getElementsByClassName('mynicheng')[i];
                        pro.innerHTML = '上香';
                        var gong = document.getElementsByClassName('myjifen')[i];
                        gong.innerHTML = '+' + json[1][i].integral;
                    }
                    if (json[1][i].type == 2) {
                        var pro = document.getElementsByClassName('mynicheng')[i];
                        pro.innerHTML = '送花';
                        var gong = document.getElementsByClassName('myjifen')[i];
                        gong.innerHTML = '+' + json[1][i].integral;
                    }
                    if (json[1][i].type == 3) {
                        var pro = document.getElementsByClassName('mynicheng')[i];
                        pro.innerHTML = '送花';
                        var gong = document.getElementsByClassName('myjifen')[i];
                        gong.innerHTML = '+' + json[1][i].integral;
                    }
                    if (json[1][i].type == 4) {
                        var pro = document.getElementsByClassName('mynicheng')[i];
                        pro.innerHTML = '抽签';
                        var gong = document.getElementsByClassName('myjifen')[i];
                        gong.style.color = '#53a600';
                        gong.innerHTML = '-'+ json[1][i].integral;
                    }
                    if (json[1][i].type == 5) {
                        var pro = document.getElementsByClassName('myjifen')[i];
                        pro.style.color = 'green';
                        pro.innerHTML = '心愿';
                        var gong = document.getElementsByClassName('myjifen')[i];
                        gong.innerHTML = '-' + json[1][i].integral;
                    }

                }
            }
        });
    })