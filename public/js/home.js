var introSectionTopOffset = $("#aboutSection").offset().top;
var aboutSectionTopOffset = $("#aboutSection").offset().top;
var componentSectionTopOffset = $("#productComponent").offset().top;

$(window).ready(() => {

    animateOnView($(".intro-section *"), introSectionTopOffset);

    $(window).scroll(() => {
        animateOnView($(".intro-section *"), introSectionTopOffset);
        animateOnView($(".fade-section *"), aboutSectionTopOffset);
        animateOnView($("#productComponent *"), componentSectionTopOffset);
    });

});