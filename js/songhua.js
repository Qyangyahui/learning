 var piaoluo =  function(){

  var d="<div class='snow' ><div>"

		var myset = setInterval(function(){

				var f=$(document).width();

				var e=Math.random()*f-20;

				var o=0.3+Math.random();

				var fon=10+Math.random()*30;

				var l = e - 100 + 200 * Math.random();

				var k=2000 + 5000 * Math.random();

				$(d).clone().appendTo(".snowbg").css({

					left:e+"px",

					opacity:o,

					"font-size":fon,

				}).animate({

				  top:"400px",

					left:l+"px",

					opacity:0.1,

				},k,"linear",function(){$(this).remove()})

			},200);
		setTimeout(function() {
			clearInterval(myset);
		}, 5000);

      };