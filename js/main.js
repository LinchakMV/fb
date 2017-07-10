$(document).ready(function(){
	// settings drop
	$('#settingsTrigger').click(function (event) {
   		$('.settings-div ').slideToggle(200);
 	});

	// Left drop
 	$('#moreTrigger').click(function (event) {
 		$('.more-text').addClass('none');
   		$('.more-div ').slideToggle(200);
 	});
 	
 	// Fixed left-right column
 	$(".col-md-4").stick_in_parent();
	$(".col-md-2").stick_in_parent({recalc_every: 10, offset_top: 40});
    
    // arrow
    $sticky = $(".col-md-2");
    $window = $(window);
    $h = $sticky.offset().top;
    $window.scroll(function(){
        if ( $window.scrollTop() > $h) {               
            $('.button-return').addClass("visible");
        }else{            
            $('.button-return').removeClass("visible");
        }
  	});

    $("#start").on("click","#arrow", function(event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    // TOUCH DEVICE
	var obj = document.getElementById('arrow');
	obj.addEventListener('touchstart', function(event) {
	  	if (event.targetTouches.length == 1) {
		  	console.log(event.targetTouches);
		    var touch=event.targetTouches[0];    
		    touchOffsetX = touch.clientX;
		    touchOffsetY = touch.clientY;
		}
	}, false);

	obj.addEventListener('touchmove', function(event) {
		event.preventDefault();
	    if (event.targetTouches.length == 1) {
	    	var touch = event.targetTouches[0];
	    	obj.style.left = touch.clientX-touchOffsetX + 'px';
	    	obj.style.top = touch.clientY-touchOffsetY + 'px';    
	    }
	}, false);

	obj.addEventListener('touchend', function(event) {
	    var generateClick = new Event("click",{bubbles: true, cancelable: true});//bubbles-the event is raised
	  	obj.dispatchEvent(generateClick);
	    obj.style.left = 0;
	    obj.style.top = 0;
	}, false);

	// MOUSE
	obj.addEventListener('mousedown', function(event){
		console.log(event);
		event.preventDefault();
		positionX = event.clientX;
		positionY = event.clientY;
		moveAt(event);
		function moveAt(event){
			obj.style.left = event.clientX - positionX + 'px';
			obj.style.top = event.clientY - positionY + 'px';
		};
		document.onmousemove = function(event){
			moveAt(event);
		};
		 obj.onmouseup = function(){
		 	obj.style.left = 0;
			obj.style.top = 0;
			document.onmousemove = null;
			obj.onmouseup = null;
		};
	},false);
	obj.ondragstart = function() {			//Disable browser drag'n'drop
	  return false;
	};
});
