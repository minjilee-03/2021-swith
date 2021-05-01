$(document).ready(
    function () {
        $('.trash').click(function () {
            $('.modal').css('display', 'block');
            var remove = $(this).parent().parent();
            var remove_sub = $(this);

            $('.btn_ok').click(function () {
                remove.remove();
                remove_sub.remove();
                $('.modal').css('display', 'none');
            });

            $('.btn_no').click(function () {
                $('.modal').css('display', 'none');
            });
        });

        $('.close').click(function () {
            $('.modal').css('display', 'none');
        });

    }
);