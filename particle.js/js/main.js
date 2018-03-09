//1st text
var element = $(".element");

        $(function() {
            element.typed({
                strings: ["OUR WELL-DEFINE", "DEVELOPMENT PROCESSES."],
                typeSpeed: 100,
                loop: true,
            });
        });
    //resize


    //scroll
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 550) {
            //clearHeader, not clearheader - caps H
            $('nav').addClass("navbar-inverse");
        }
    });
    $( window ).resize(function() {
        if($(window).width() <=762) $('nav').addClass("navbar-inverse");
        else $('nav').removeClass("navbar-inverse");
      });