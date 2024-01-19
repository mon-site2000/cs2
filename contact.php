<?php
// Définir votre adresse e-mail
$email_to = "votre@email.com";

// Vérifier si le formulaire a été soumis
if (isset($_POST["submit"])) {

  // Récupérer les données du formulaire
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Vérifier si les champs sont vides
  if (empty($name) || empty($email) || empty($message)) {
    $error = "Veuillez remplir tous les champs.";
  } else {
    // Vérifier si l'adresse e-mail est valide
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $error = "Veuillez entrer une adresse e-mail valide.";
    } else {
      // Préparer le sujet et le corps du mail
      $subject = "Message de $name";
      $body = "Vous avez reçu un message de $name ($email) :\n\n$message";

      // Envoyer le mail
      $success = mail($email_to, $subject, $body);

      // Vérifier si le mail a été envoyé
      if ($success) {
        $success = "Votre message a été envoyé avec succès.";
      } else {
        $error = "Une erreur est survenue lors de l'envoi du message.";
      }
    }
  }
}
?>