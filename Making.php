<?php
    //데이터베이스 연결
    $host = "localhost";
    $user = "root";
    $pw = "root";
    $dbName = "swith";
    $con = new mysqli($host, $user, $pw, $dbName);

    //값 가져오기
    $utitle = $_POST["title"];
    $uvoca = $_POST["voca"];
    $umean = $_POST["mean"];

    //테이블에 값 집어넣기
    for($i = 0; $i < count($uvoca)-1; $i++) {
        if(!empty($uvoca[$i])){
            $sql = "insert into voca(title, voca, mean) value ('$utitle', '$uvoca[$i]', '$umean[$i]')";
            mysqli_query($con, $sql);
        } else {
            break;
        }
    }

    echo "<script>location.replace('MakingVocabulary.html')</script>";
?>

