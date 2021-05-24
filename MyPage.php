<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Swith</title>
        <link rel="stylesheet" href="MyPageEdit.css" type="text/css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="profile.js" type="text/javascript"></script>
        <script src="MyPage.js" type="text/javascript"></script>
    </head>

    <body>
        <div id="container">
            <header style="z-index: 3;">
                <a href="index.html">
                    <div id="logo" style="max-width: 1200px;">
                        <img src="image/logo.png">
                    </div>
                </a>
                <nav>
                    <ul>
                        <li class="highlight"><a href="Login.html">MY PAGE</a></li>
                        <li class="highlight"><a href="timer.html">TIMER</a></li>
                        <li class="highlight"><a href="Vocabulary.html">STUDY</a></li>
                        <li class="highlight"><a href="index.html">HOME</a></li>
                    </ul>
                </nav>
            </header>
            <div id="main">
                <div class="main_left">
                    <div class="profile">
                        <div id="image_container">
                            <img id="img" />
                        </div>
                    </div>
                </div>
                <div id="main_middle"></div>
                <div class="main_right">
                    <br><br>
                    <p>닉네임 : <?php echo $name ?> </p>
                    <p>아이디 : <?php echo $id ?> </p>
                    <p>생년월일 : <?php echo $birthdate ?></p>
                    <p>가입날짜 : <?php echo $joindate ?></p>
                    <br><br><br>
                    <input type="button" id="edit" value="수정" style="float: right;"
                        onclick="location.href='MyPageEdit.php'">
                    <br>
                    <input type="button" id="myword" value="내가 만든 단어장" onclick="location.href='Vocabulary.html'">
                    <br>
                    <input type="button" id="mystudy" value="내 공부 기록" onclick="location.href='Calendar.html'">
                </div>
            </div>
            <footer>
                <img src="image/footer_logo.png">
                <p>이민지/문진진/최지원/최가흔</p>
            </footer>
        </div>
    </body>
</html>