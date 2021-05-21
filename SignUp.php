<meta charset="UTF-8">
<?php
    $conn = mysqli_connect("localhost", "mirim", "1234", "swith"); // DB와 연결
    $hashedPassword = password_hash($_POST['pw'], PASSWORD_DEFAULT); // 암호화
    $sql = "
        INSERT INTO user
        (id, pw, name, year, month, day)
        VALUES('{$_POST['id']}', '{$hashedPassword}', '{$_POST['name']}', '{$_POST['year']}', '{$_POST['month']}', '{$_POST['day']}'
        )";
    $result = mysqli_query($conn, $sql); // Query문 실행

    if ($result === false) {
        echo "저장에 문제가 생겼습니다. 관리자에게 문의해주세요.";
        echo mysqli_error($conn);
    } else {
?>

<script>
    alert("회원가입이 완료되었습니다");
    location.href = "index.html";
</script>

<?php
    }
?>