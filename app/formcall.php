<?php
$company_email = 'hello@franshiza-klining.ru';

$headerFields = array(
   "From: {$company_email}",
   "MIME-Version: 1.0",
   "Content-Type: text/html;charset=utf-8"
);

$to = 'hello@franshiza-klining.ru';
$subject = "expertcleaning — Order Call Form";
$body = "<p>User name: " . $_POST['orderCallName'] . "</p><br /><p>User phone: " . $_POST['orderCallPhone'] . "</p>";
if (mail($to, $subject, $body, implode("\r\n", $headerFields))) {
echo("<p>Message sent! " . $body . "</p>");
} else {
echo("<p>Message not send</p>");
}
?>