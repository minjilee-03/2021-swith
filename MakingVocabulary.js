$(document).ready(
    function () {
        $('.trash').click(function () {
            var remove = $(this).parent().parent();
            var remove_sub = $(this);
            remove.remove();
            remove_sub.remove();
        });
    }
);