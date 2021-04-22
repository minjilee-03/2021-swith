$(document).ready(
    function () {
        $('.mean').hide();
        $('.voca').show();

        $('.card').click(function () {
            var voca = $(this).find('.voca');
            var mean = $(this).find('.mean');
            voca.toggle();
            mean.toggle();
        });
    });