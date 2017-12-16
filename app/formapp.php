<?php
 $visitor_email = 'hello@franshiza-klining.ru';
 
 $headerFields = array(
    "From: {$visitor_email}",
    "MIME-Version: 1.0",
    "Content-Type: text/html;charset=utf-8"
 );
 
 $to = $visitor_email;
 $subject = "expertcleaning — Application From";
 $body = "<p>User name: " . $_POST['appCity'] . "</p><br /><p>User email: " . $_POST['appName'] . "</p><br /><p>User phone: " . $_POST['appPhone'] . "</p>";
 if (mail($to, '=?utf-8?B?'.base64_encode($subject).'?=', $body, implode("\r\n", $headerFields))) {
 echo("<p>Сообщение отправлено!" . $_POST['appCity'] . "</p>");
 } else {
 echo("<p>Сообщение не было отправлено!</p>");
 }
 ?>
