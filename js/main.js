var obj = {
	init: function(){
		if($(".main-slider").length){
			obj.mainSlider();
		}
		obj.menuResponsive();
	},
	menuResponsive: function(){
		$("#openNav").click(function(e){
			e.preventDefault();
			$("html, body").addClass("menuActive");
			$(".bg-overlay").addClass("activeMenu");
			document.getElementById("navPanel").style.width = "100%";
		});
		$("#closeNav").click(function(e){
			e.preventDefault();
			$("html, body").removeClass("menuActive");
			$(".bg-overlay").removeClass("activeMenu");
			document.getElementById("navPanel").style.width = "0";
		});
	},
	mainSlider: function(){
		$('.main-slider').owlCarousel({
            loop: true,
            nav:true,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
	}
}

$(document).ready(function(){
	obj.init();
});