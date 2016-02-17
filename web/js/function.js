// JavaScript Document
// function for onhover menu
//$(document).ready(function(){
//    $(".dropdown").hover(            
//        function() {
//            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
//            $(this).toggleClass('open');        
//        },
//        function() {
//            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
//            $(this).toggleClass('open');       
//        }
//    );
//});
/*! Main */
$(document).ready(function() {
        /* initialize shuffle plugin */
        var $grid = $('#grid');
        $grid.shuffle({ itemSelector: '.item' /* the selector for the items in the grid*/ });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
                e.preventDefault();
                /* set active class */
                $('#filter a').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                $grid.shuffle('shuffle', groupName );
        });

});
// sticky nav css start
$(document).ready(function() {
var stickyNavTop = $('.navbar-default').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.navbar-default .navbar-brand').addClass('small-logo');
	$('.navbar-default').addClass('sticky');
} else {
    $('.navbar-default .navbar-brand').removeClass('small-logo'); 
	$('.navbar-default').removeClass('sticky');
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});
});
// sticky nav css end
// custom menu css start
var $ = jQuery.noConflict();
	$(document).ready(function() { 
		var parentcontent,childcontant;
		parentcontent=$('#lnkProduct').parent();
		childcontant=$('#lnkProduct');
		$('#lnkProduct').click(function(){
			$('.navbar-brand').toggleClass("small-logo");
			$('.sticky .navbar-brand').addClass("small-logo");
			
			var winwodith=$(window).width();
			if(winwodith<768){
				if($('#lnkProduct a.dropdown-toggle').attr("aria-expanded")=="false" || $('#lnkProduct a.dropdown-toggle').attr("aria-expanded")==undefined){
					
					$('#lnkProduct').siblings().hide();
					$('.navbar-right').hide();
					$('#lnkProduct a.dropdown-toggle').html('<i class="v-previous"><img src="images/brand/button-previous.png" alt="next"></i> productos');
				}
				else{
					$('#lnkProduct a.dropdown-toggle').html('productos <i class="v-next"><img src="images/brand/button-next.png" alt="next"></i>');
					$('#lnkProduct').siblings().show();
					$('.navbar-right').show();
					
					
				}
			}
		});
	}); 
	
	$(window).on('resize', function(){
		var winwodith=$(window).width();
		
		if(winwodith<768){
			if($('#lnkProduct a.dropdown-toggle').attr("aria-expanded")=="false" || $('#lnkProduct a.dropdown-toggle').attr("aria-expanded")==undefined){
					
					$('#lnkProduct a.dropdown-toggle').html('productos <i class="v-next"><img src="images/brand/button-next.png" alt="next"></i>');
					$('#lnkProduct').siblings().show();
					$('.navbar-right').show();
				}
				else{
					$('#lnkProduct').siblings().hide();
					$('.navbar-right').hide();
					$('#lnkProduct a.dropdown-toggle').html('<i class="v-previous"><img src="images/brand/button-previous.png" alt="next"></i> productos');
					
				}
		}
		else{
			$('#lnkProduct a.dropdown-toggle').html('productos');
			$('#lnkProduct').siblings().show();
			$('.navbar-right').show();
		}
	});
// custom menu css end	
	
/*! Main */
jQuery(document).ready(function($) {
  
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "70px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    });
});
  
jQuery(window).load(function($){
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:50,
      }
    );
    wow.init();
});
//animation

//flip js start

/**
 * Do the random stuff
 *
 */
 var windowWidth = $(window).width();
if(windowWidth > 768){
jQuery(window).load(function($){
(function() {

  // cache vars
  var cards = document.querySelectorAll(".card.effect__random");
  var timeMin = 1;
  var timeMax = 3;
  var timeouts = [];

  // loop through cards
  for ( var i = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    var cardID = card.getAttribute("data-id");
    var id = "timeoutID" + cardID;
    var time = randomNum( timeMin, timeMax ) * 5000;
    cardsTimeout( id, time, card );
  }

  // timeout listener
  function cardsTimeout( id, time, card ) {
    if (id in timeouts) {
      clearTimeout(timeouts[id]);
    }
    timeouts[id] = setTimeout( function() {
      var c = card.classList;
      var newTime = randomNum( timeMin, timeMax ) * 5000;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
      cardsTimeout( id, newTime, card );
    }, time );
  }

  // random number generator given min and max
  function randomNum( min, max ) {
    return Math.random() * (max - min) + min;
  }

})();
});
}
// flip js end
jQuery(document).ready(function () {
    jQuery('.section-down-arrow-wrap.scroller').on('click', function () {
        var fuller = $(this).closest('.fullscreen').next('.fullscreen'),
            section = $(this).closest('.main-content');
        section.animate({
            scrollTop: $(section).scrollTop() + fuller.offset().top + 0
        }, 700);
    });
});
// scroll js start
jQuery.fn.niceScroll = function() {
	jQuery(this).click(function(e) {
		var h = jQuery(this).attr('href'),
		target;

		if (h.charAt(0) == '#' && h.length > 1 && (target = jQuery(h)).length > 0){
			var pos = Math.max(target.offset().top, 0);
			e.preventDefault();
			jQuery('body,html').animate({
				scrollTop : pos
			}, 'slow', 'swing');
		}
	});
};
jQuery('.scroll').niceScroll();
jQuery(function() {
    jQuery('marquee').mouseover(function() {
        jQuery(this).attr('scrollamount',0);
    }).mouseout(function() {
         jQuery(this).attr('scrollamount',1.5);
    });

});
// scroll js end
// radio and check box js start
jQuery('input[name="radio-btn"]').wrap('<div class="radio-btn"><i></i></div>');
jQuery(".radio-btn").on('click', function () {
    var _this = $(this),
        block = _this.parent().parent();
    block.find('input:radio').attr('checked', false);
    block.find(".radio-btn").removeClass('checkedRadio');
    _this.addClass('checkedRadio');
    _this.find('input:radio').attr('checked', true);
});
jQuery('input[name="check-box"]').wrap('<div class="check-box"><i></i></div>');
jQuery.fn.toggleCheckbox = function () {
    this.attr('checked', !this.attr('checked'));
}
jQuery('.check-box').on('click', function () {
    jQuery(this).find(':checkbox').toggleCheckbox();
    jQuery(this).toggleClass('checkedBox');
});
//filter js start