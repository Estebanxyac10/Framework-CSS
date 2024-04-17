$(document).ready(() => {
    const tabItems = $(".tab-item");

    tabItems.each(function () {
        $(this).click(() => {
            const target = $(this).attr("data-target");
            const tabContents = $(".tab-pane");

            tabContents.removeClass("active");
            $(target).addClass("active");

            tabItems.removeClass("active");
            $(this).addClass("active");
        });
    });
});