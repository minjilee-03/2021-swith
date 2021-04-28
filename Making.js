var count = 9;

$(document).ready(
    function () {
        $('.add').click(function () {
            if (count < 10) {
                $('.voca_field .addInput').append(
                    '<li>\
                    <span>00'+ (count++) + '</span>\
                    <input type="text" name="voca" />\
                    </li>'
                );
                $('.mean_field .addInput').append(
                    '<li><input type="text" name="mean" /></li>'
                );
            } else if (count >= 10) {
                $('.voca_field .addInput').append(
                    '<li>\
                    <span>0'+ (count++) + '</span>\
                    <input type="text" name="voca" />\
                    </li>'
                );
                $('.mean_field .addInput').append(
                    '<li><input type="text" name="mean" /></li>'
                );
            } else {
                $('.voca_field .addInput').append(
                    '<li>\
                    <span>'+ (count++) + '</span>\
                    <input type="text" name="voca" />\
                    </li>'
                );
                $('.mean_field .addInput').append(
                    '<li><input type="text" name="mean" /></li>'
                );
            } // 추가   
        });
        $('.minus').click(function () {
            var removeLi1 = document.querySelectorAll(".voca_field li");
            var removeLi2 = document.querySelectorAll(".mean_field li");
            if ((count - 1) > 1) {
                $(removeLi1).last().remove();
                $(removeLi2).last().remove();
                count--;
            }
        }); // 제거
    });