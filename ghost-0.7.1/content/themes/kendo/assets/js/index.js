$(function () {
    $('.fade-to-white').hover(function() {
        $(this).velocity('stop').velocity({
            backgroundColor: "#dadada",
            backgroundColorAlpha: "0.8"
        },{
            easing: "easeInOutCubic",
            duration: "fast"
        });
        $('section.cover').css("background-image", $(this).parent().css("background-image"));
    }, function() {
        $(this).velocity('stop').velocity({
            backgroundColor: "#FFFFFF",
            backgroundColorAlpha: "0.1"
        },{
            easing: "easeInOutCubic",
            duration: "fast"
        });
        $('section.cover').css("background-image", "url('/assets/images/cover_image_blurred.png')");
        // $('section.cover').css("background-image", "none");
        // $('section.cover').css("background-color", "#607D8B");
    });
});