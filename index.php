<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function


    use PHPMailer\PHPMailer\PHPMailer;
    
    
    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer();


//Server settings

$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'ericktequiz1110@gmail.com';                     //SMTP username
$mail->Password   = 'Cambiar.el.mundo.2021';                               //SMTP password
$mail->SMTPSecure = "tls";            //Enable implicit TLS encryption
$mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`


$email = 'persona_contactando@gmail.com';
$nombre = 'Persona de Prueba';


//Recipients
$mail->setFrom($email, $nombre);
$mail->addAddress('ericktequiz1110@hotmail.com', $email);     //Add a recipient


//Content
$mail->isHTML(true);                                  //Set email format to HTML
$mail->Subject = 'Test de envios de emails';
$mail->Body    = 'Este es un mensaje de prueba por favor no responder.<b> "Tx Corporation"</b>';


  if (!$mail->Send())
  {
    echo "Error: $mail->ErrorInfo";
  }
  else
  {
    echo "Message Sent!";
  }
 ?>