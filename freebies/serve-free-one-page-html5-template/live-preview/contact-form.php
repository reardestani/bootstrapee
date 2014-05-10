<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];


$html = "Sender Name: $name \r\n";
$html .= "Sender Email: $email \r\n";
$html .= "Sender Message: $message \r\n";

// replace your email address with the following
$recipient = "support(@)serve.com";

// Subject of recieving email
$subject = "Serve - One Page HTML Template";

//
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $html, $mailheader) or die("Error!");

// success message
echo "Thank you. We will get in touch with you as soon as possible.";
?>