var count = 9;

$(document).ready (
    function () {
        $('.add').click (function () {
            if (count < 10){
                $('.voca_field .addInput').append (
                    '<li>\
                    00'+ count++ + '\
                    <input type="text" name="voca" /></li>'
                );
            }else if (count >= 10){
                $('.voca_field .addInput').append (
                    '<li>\
                    0'+ count++ + '\
                    <input type="text" name="voca" /></li>'
                );
            }else{
                $('.voca_field .addInput').append (
                    '<li>\
                    '+ count++ + '\
                    <input type="text" name="voca" /></li>'
                );
            } // 추가
            
            $('.mean_field .addInput').append (
                '<li><input type="text" name="mean" /></li>'
            );
        });
        $('.minus').click (function () {
            var removeLi1 = document.querySelectorAll(".number_field li");
            var removeLi2 = document.querySelectorAll(".voca_field li");
            var removeLi3 = document.querySelectorAll(".mean_field li");
            if(count > 1){
                $(removeLi1).last().remove();
                $(removeLi2).last().remove();
                $(removeLi3).last().remove();
                count--;
            }
        }); // 제거
    });
