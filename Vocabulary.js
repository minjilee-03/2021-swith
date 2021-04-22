$(document).ready(
    function () {
        $('.search button').click(function () {
            $('.voca_intro').hide();
            $('.unit_list_sub').hide();
            var k = $(this).val();
            var temp = $('.title a:contains("' + k + '")');
            $(temp).parent().show();
        })
    });