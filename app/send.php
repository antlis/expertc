<?php
 $visitor_email = 'hello@franshiza-klining.ru';
 
 $headerFields = array(
    "From: {$visitor_email}",
    "MIME-Version: 1.0",
    "Content-Type: text/html;charset=utf-8"
 );
 
 $to = $_POST['userEmail'];
 $subject = "Добрый день! " . $_POST['userName'];
 $subjectHeader = mb_encode_mimeheader($subject,"UTF-8");
 $body = "Приветствую \n\nВаш Архив!\n\nСсылка";
 if (mail($to, $subjectHeader, $body, implode("\r\n", $headerFields))) {
 echo("<p>Сообщение отправлено!</p>");
 } else {
 echo("<p>Сообщение не было отправлено!</p>");
 }
 ?>
