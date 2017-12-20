<?php
$company_email = 'hello@franshiza-klining.ru';

$headerFields = array(
   "From: {$company_email}",
   "MIME-Version: 1.0",
   "Content-Type: text/html;charset=utf-8"
);

$to = 'hello@franshiza-klining.ru';
$subject = "expertcleaning — Download Archive Form";
$body = "<p>User name: " . $_POST['downloadName'] . "</p><br /><p>User email: " . $_POST['downloadEmail'] . "</p><br /><p>User phone: " . $_POST['downloadPhone'] . "</p>";
if (mail($to, '=?utf-8?B?'.base64_encode($subject).'?=', $body, implode("\r\n", $headerFields))) {
echo("<p>Message Sent! " . $body . "</p>");
} else {
echo("<p>Message was not Sent!</p>");
}
?>
