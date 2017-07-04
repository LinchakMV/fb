$(function () {
	$('#settingsTrigger').click(function (event) {
		$('.settnigs-div ').slideToggle(200);
	});
});



$(".col-sm-4").stick_in_parent();
$(".col-sm-2").stick_in_parent();


jQuery(document).ready(function($){
     $sticky = $(".sticky");
     // $center = $(".center");
     // $right = $(".right-menu");
     $window = $(window);
    // Определяем координаты верха блока навигации
    $h = $sticky.offset().top;
    $window.scroll(function(){
        // Если прокрутили скролл ниже макушки блока, включаем фиксацию
        if ( $window.scrollTop() > $h) {
               
               $('.button-return').addClass("visible");
        }else{
            //Иначе возвращаем всё назад
            
            $('.button-return').removeClass("visible");
        }
  });
});
$(document).ready(function(){
    $("#start").on("click","#arrow", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


// var arrow = document.getElementById('arrow');
// arrow.onmousedown = function(e) {
//   var coords = getCoords(arrow);
//   var shiftX = e.pageX - coords.left;
//   var shiftY = e.pageY - coords.top;
//   arrow.style.position = 'absolute';
//   document.body.appendChild(arrow);
//   moveAt(e);
//   arrow.style.zIndex = 1000; // над другими элементами

//   function moveAt(e) {
//     arrow.style.left = e.pageX - shiftX + 'px';
//     arrow.style.top = e.pageY - shiftY + 'px';
//   }

//   document.onmousemove = function(e) {
//     moveAt(e);
//   };

//   arrow.onmouseup = function() {
//     document.onmousemove = null;
//     arrow.onmouseup = null;
//   };

// }

// arrow.ondragstart = function() {
//   return false;
// };