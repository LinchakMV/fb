$(function () {
 $('#settingsTrigger').click(function (event) {
   $('.settnigs-div ').slideToggle(200);
 });
});



$(".col-sm-4").stick_in_parent();
$(".col-sm-2").stick_in_parent();


jQuery(document).ready(function($){
     $sticky = $(".sticky");
     $window = $(window);
    $h = $sticky.offset().top;
    $window.scroll(function(){
        if ( $window.scrollTop() > $h) {               
               $('.button-return').addClass("visible");
        }else{            
            $('.button-return').removeClass("visible");
        }
  });
});
$(document).ready(function(){
    $("#start").on("click","#arrow", function(event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


var obj = document.getElementById('arrow');
obj.addEventListener('touchstart', function(event) {
  if (event.targetTouches.length == 1) {
    var touch=event.targetTouches[0];
    touchOffsetX = touch.clientX - touch.target.offsetLeft;
    touchOffsetY = touch.clientY - touch.target.offsetTop;
 }
}, false);
obj.addEventListener('touchmove', function(event) {
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    obj.style.left = touch.clientX-touchOffsetX + 'px';
    obj.style.top = touch.clientY-touchOffsetY + 'px';
  }
}, false);


var tarobj=document.getElementById('arrow');
obj.addEventListener('touchend', function(event) {
  if (event.changedTouches.length == 1) {
    var tarWidth=tarobj.offsetWidth;
    var tarHeight=tarobj.offsetHeight;
    var tarX=tarobj.offsetLeft;
    var tarY=tarobj.offsetTop;
    if(
      (event.changedTouches[0].clientX > tarX) &&
      (event.changedTouches[0].clientX < (tarX + tarWidth)) &&
      (event.changedTouches[0].clientY > tarY) &&
      (event.changedTouches[0].clientY < (tarY + tarHeight))){
    }
  }
}, false);
