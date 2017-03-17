$(document).ready(function(){
     $("#mytitle").fadeIn(2000);
     $("#mybg").animate({top:'5%'},1500);
     $("#mysn").animate({top:'19%'},1500);
     $("#mybutton").fadeIn(2000).click(function(){
         location.href = "mymenu.html";
     });
});