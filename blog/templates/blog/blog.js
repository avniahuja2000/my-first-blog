$(document).ready(function () {
    var scroll_pos = 0;
    $("#left-panel").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos < 210) {
            $("#left-panel").css('background-color', 'pink');
        }
        else if (scroll_pos > 420) {
            $("#left-panel").css('background-color', 'purple');
        }
        else {
            $("#left-panel").css('background-color', 'blue');
        }
        console.log(scroll_pos);
    });
});
