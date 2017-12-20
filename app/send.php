<?php
 $visitor_email = 'hello@franshiza-klining.ru';
 $archive_link  = "<a href='https://yadi.sk/d/29Z5ZXYy3Qdbks'>https://yadi.sk/d/29Z5ZXYy3Qdbks</a>";
 
 $headerFields = array(
    "From: {$visitor_email}",
    "MIME-Version: 1.0",
    "Content-Type: text/html;charset=utf-8"
 );
 
 $to = $_POST['userEmail'];
 $subject = "Эксперт Клининг — Файлы по франшизе";
 $subject_encode = '=?utf-8?B?'.base64_encode($subject).'?=';
 $body = $archive_link;
 if (mail($to, $subject_encode, $body, implode("\r\n", $headerFields))) {
 echo("<p>Сообщение отправлено!</p>");
 } else {
 echo("<p>Сообщение не было отправлено!</p>");
 }
?>