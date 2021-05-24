var count = 9; 

// $(document).on으로 동적요소들이 추가되었을 때 이벤트를 위임한다.
$(document).on("click", '.add', function () { // .add 버튼을 누르면 요소가 추가된다.
    $('.list').append(
        '<li>\
            <span class="num">' + ('00' + count++).slice(-3) + '</span>\
            <input type="text" name="voca" class="addvoca" />\
            <input type="text" name="mean" class="addvoca" />\
            <div class="addMinus">\
                <button type="button" class="add" value="+">+</button>\
                <button type="button" class="minus" value="-">&#8211;</button>\
            </div>\
        </li>'
    ); // count 변수 앞에 '00' 문자열을 붙인 후, slice() 메소드로 끝에서 3자리를 잘라온다.
    $('.addvoca').attr("onfocus", "$('.addMinus').hide(); $(this).parent().find('div').show();"); // 추가되는 input태그에 속성을 추가한다. 
    $(this).parent().parent().find('input[name="voca"]').focus();
}); // 추가   

$(document).on("click", '.minus', function () { // .minus 버튼을 누르면 요소가 삭제된다.
    if ((count - 1) > 1) { // count가 1보다 작지 않을 때 실행하는 일.
        if($(this).parent().parent().is($('li').last())){ // 해당 버튼의 부모의 부묘 요소인 li 태그가 마지막 li태그의 요소인지 확인한다.
            $(this).parent().parent().prev().find('input[name="voca"]').focus(); // 삭제하기 전에 전 li태그의 input을 포커스한다.
        }else{
            $(this).parent().parent().next().find('input[name="voca"]').focus(); // 삭제하기 전에 다음 li태그의 input을 포커스한다.
            $(this).parent().parent().next().find('.addMinus').css('top', ($(this).parent().parent().find('input').offset().top)+20); // 버튼 위치를 조정한다.
        }  
        $(this).parent().parent().remove(); // 해당 버튼의 부모의 부모 요소인 li 태그가 삭제된다.
        count--; // 숫자 감소
    }
    $('.num').each(function(idx) {
        $(this).text(('00' + (idx+1)).slice(-3));
    });
}); // 제거

$(document).on("focus", 'input:not([class="hidden_text"])', function (){
    $('.addMinus').css('top', ($(this).offset().top)+20);
}); // input 태그의 y좌표값 + 20을 .addMinus 태그의 css에 적용한다. (단, hidden_text를 클래스로 가진 input은 제외한다)

$(document).on("focus", '#title', function (){
    $('.addMinus').css('top', ($('.basic_input').offset().top)+20);
});