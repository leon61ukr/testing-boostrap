$('#carouselBikeIndicators').bcSwipe({ threshold: 50 });

// $('.accordion').on('show hide', function (n) {
//     $(n.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('fa-angle-up fa-angle-down');
// });

$('div.accordion-body').on('shown', function () { console.log($(this).parent("div").find(".fa-angle-down").html());// this will show you html selected 
$(this).parent("div").find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");

    });

$('div.accordion-body').on('hidden', function () { console.log(this);
$(this).parent("div").find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");