<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Swith</title>
    <link rel="stylesheet" href="MyPageEdit.css" type="text/css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="profile.js" type="text/javascript"></script>
    <script src="MyPageEdit.js" type="text/javascript"></script>
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
                <div id="findbtn">
                    <input type="file" id="input_img" />
                </div>
            </div>
            <div id="main_middle"></div>
            <div class="main_right">
                <p>닉네임</p>
                <input type="text" name="name" style="width: 150px;" value="<?php echo $name ?>">
                <p>아이디</p>
                <input type="text" name="id" value="<?php echo $id ?>">
                <p>비밀번호</p>
                <input type="password" name="password" placeholder="비밀번호를 입력하세요">
                <p>생년월일</p>
                <select id="year">
                    <option>선택하세요</option>
                </select>년
                <select id="month">
                    <option>선택하세요</option>
                </select>월
                <select id="day">
                    <option>선택하세요</option>
                </select>일
                <br><br>
                <input type="button" id="save" value="저장" style="float: right;" onclick="location.href='MyPage.php'">
            </div>
        </div>
        <footer>
            <img src="image/footer_logo.png">
            <p>이민지/문진진/최지원/최가흔</p>
        </footer>
    </div>
</body>

</html>