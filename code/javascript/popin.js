$(document).ready(() => {
    const popin0 = $(".modal")[0];
    const open0 = $(".popin-display")[0];
    const close0 = $(".popin-dismiss")[0];

    open0.click((e) => {
        e.preventDefault();
        $("#myModal").modal("show");

    });
    close0.click((e) => {
        e.preventDefault();
        $("#myModal").modal("hide");
    });
    $(document).keydown((e) => {
        if (e.keyCode === 27 && $("#myModal").hasClass("show")) {
            e.preventDefault();
            $("#myModal").modal("hide");
        }
    });

    $(document).click((e) => {
        if (e.target !== popin0 && e.target !== open0 && e.target !== close0) {
            e.preventDefault();
            $("#myModal").modal("hide");
        }
    });
});