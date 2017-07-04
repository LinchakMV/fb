$(function () {
	$('#settingsTrigger').click(function (event) {
		$('.settnigs-div ').slideToggle(200);
	});
});



$(".col-sm-4").stick_in_parent();
$(".col-sm-2").stick_in_parent();


$(document).ready(function($){
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
    $("#start").on("click","#arrow", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
