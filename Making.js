var count = 9;

$(document).ready (
    function () {
        $('.add').click (function () {
            if (count < 10){
                $('.addInput').append (
                    '<li>\
                        00'+(count++)+
                    ' <input type="text" name="voca" />\
                    <input type="text" name="mean" />\
                    </li>'
                );
            }else if (count>100){
                $('.addInput').append (
                    '<li>\
                        0'+(count++)+
                    ' <input type="text" name="voca" />\
                    <input type="text" name="mean" />\
                    </li>'
                );
            }else{
                $('.addInput').append (
                    '<li>'
                        +(count++)+
                    ' <input type="text" name="voca" />\
                    <input type="text" name="mean" />\
                    </li>'
                );
            } // 추가
        });
        $('.minus').click (function () {
            var removeLi = document.querySelectorAll(".voca_making li");
            if(count > 1){
                $(removeLi).last().remove();
                count--;
            }
        }); // 제거
    });
