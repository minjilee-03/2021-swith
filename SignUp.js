$(document).ready(
    function () {
        for (var i = 2021; i > 1920; i--) {
            $('#year').append('<option value="' + i + '">' + i + '</option>');
        }
        for (var i = 1; i < 13; i++) {
            $('#month').append('<option value="' + i + '">' + i + '</option>');
        }
        for (var i = 1; i < 32; i++) {
            $('#day').append('<option value="' + i + '">' + i + '</option>');
        }

        const signupForm = document.querySelector(".text_field");
        const signupButton = document.querySelector("#signupButton");
        const id = document.querySelector("#id");
        const password = document.querySelector("#pw");
        const passwordCheck = document.querySelector("#pw_re");
        const name = document.querySelector("#name");

        signupButton.addEventListener("click", function (e) {
            if (id.value == "") {
                id.focus();
                alert("ID를 입력해주세요.");
            } else if (password.value == "") {
                password.focus();
                alert("비밀번호를 입력해주세요.");
            } else if (passwordCheck.value == "") {
                passwordCheck.focus();
                alert("비밀번호를 다시 입력해주세요.");
            } else if (password.value && password.value !== passwordCheck.value) {
                passwordCheck.focus();
                alert("비밀번호가 일치하지 않습니다.");
            } else if (name.value == "") {
                name.focus();
                alert("이름을 입력해주세요.");
            } else {
                signupForm.submit();
            }
        });
    }
);