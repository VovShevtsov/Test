<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$email = $_POST['email'];
$phone = $_POST['phone'];



$mail->isSMTP();        
$mail->Host = 'smtp.mail.ru';  								
$mail->SMTPAuth = true;         
$mail->Username = 'dzharuzov@mail.ru'; 
$mail->Password = '$dk820&123'; 
$mail->SMTPSecure = 'ssl';                
$mail->Port = 465; 

$mail->setFrom('dzharuzov@mail.ru'); 
$mail->addAddress('order@salesgenerator.pro');     
$mail->isHTML(true);    

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    =  'Почта:' .$email. '<br> телефон ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>