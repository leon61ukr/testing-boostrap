(function() {
const noWay = "color: lime;" + "font-size: 60px;" + "font-weight: bold;" + "text-shadow: 1px 1px 5px rgb(0, 0, 0);" + "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);"; setTimeout(console.log.bind(console, "%cSpecial thanks to Sensei Koldovskyy", noWay), 0);
})();
$(function() {
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});