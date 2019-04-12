$(document).ready(function () {
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 86) {
            $(".navbar").addClass("shrink");
        }
        else {
            $(".navbar").removeClass("shrink");
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                stagePadding: 20,
            },
            768: {
                items: 3,
                margin: 20,
                stagePadding: 50,
            },
            1000: {
                items: 4
            }
        }
    });

    $("#projects .item-image").on("click", function () {
        var modal = $("#imgModal");
        var img = $(this).attr("src");
        console.log(img);
        var modalImg = $("#modalImg");
        var captionText = $("#caption");

        modal.css("display", "block");
        modalImg.attr("src", img);
        captionText.html(this.alt);

        var span = $("#imgModal > span");
        span.on("click", function () {
            modal.css("display", "none");
        });
    });

    let anchorlinks = $(".navbar a.nav-link");
    for (let item of anchorlinks) {
        $(item).on("click", function (e) {
            e.preventDefault();
            let hashval = $(this).attr("href");
            let target = $(hashval);
            target = target.length ? target : $('[name=' + hashval.slice(1) + ']');
            $("html, body").animate({ scrollTop: $(target).offset().top - 100 }, 'slow');
        });
    }
});




