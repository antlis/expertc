<?php
 $visitor_email = 'hello@franshiza-klining.ru';
 
 $headerFields = array(
    "From: {$visitor_email}",
    "MIME-Version: 1.0",
    "Content-Type: text/html;charset=utf-8"
 );
 
 $to = $visitor_email;
 $subject = "expertcleaning — Order Call Form";
 $body = "<p>User name: " . $_POST['orderCallName'] . "</p><br /><p>User phone: " . $_POST['orderCallPhone'] . "</p>";
 if (mail($to, '=?utf-8?B?'.base64_encode($subject).'?=', $body, implode("\r\n", $headerFields))) {
 echo("<p>Сообщение отправлено!" . $_POST['orderCallName'] . "</p>");
 } else {
 echo("<p>Сообщение не было отправлено!</p>");
 }
 ?>
