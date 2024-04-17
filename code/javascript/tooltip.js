$(document).ready(() => {
    $(".tooltip").each(function () {
        if ($(this).attr("title")) {
            $(this).append("<div class='tooltip-text'>" + $(this).attr("title") + "</div>");
            $(this).remove("title");
        }
    });
});