<?php
$company_email = 'hello@franshiza-klining.ru';

$headerFields = array(
   "From: {$company_email}",
   "MIME-Version: 1.0",
   "Content-Type: text/html;charset=utf-8"
);

$to = 'hello@franshiza-klining.ru';
$subject = "expertcleaning — Application From";
$body = "<p>User name: " . $_POST['appCity'] . "</p><br /><p>User email: " . $_POST['appName'] . "</p><br /><p>User phone: " . $_POST['appPhone'] . "</p>";
if (mail($to, '=?utf-8?B?'.base64_encode($subject).'?=', $body, implode("\r\n", $headerFields))) {
echo("<p>Message Sent! " . $body . "</p>");
} else {
echo("<p>Message was no Sent!</p>");
}
?>
