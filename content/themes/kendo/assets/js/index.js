$(function () {
    $('.fade-to-white').hover(function() {
        $(this).velocity('stop').velocity({
            backgroundColor: "#FFFFFF",
            backgroundColorAlpha: "0.9"
        },{
            easing: "easeInOutCubic",
            duration: "fast"
        });
        $('section.cover').css("background-image", $(this).parent().css("background-image"));
    }, function() {
        $(this).velocity('stop').velocity({
            backgroundColor: "#FFFFFF",
            backgroundColorAlpha: "0"
        },{
            easing: "easeInOutCubic",
            duration: "fast"
        });
        $('section.cover').css("background-image", "url('/assets/images/cover_image_blurred.jpg')");
    });
});