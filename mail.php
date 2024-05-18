<?php
    $firstName = $_POST['userFirstName'];
    $lastName = $_POST['userLastName'];
    $userEmail = $_POST['userEmail'];
    $contactNumber = $_POST['contactNumber'];
    $compName = $_POST['compName'];
    $projectTitle = $_POST['projectTitle'];
    $projectDisp = $_POST['projectDisp'];

    $fullName = $firstName . ' ' . $lastName;

    $to = "contact@codehuntspk.com";

    $subject = "Message from " .$fullName;

    $body = "Hi!" 
            . "\n" 
            . "My Name is $fullName i need a '$projectTitle' which is '$projectDisp' for '$compName'"
            . "\n\n" 
            . $fullName 
            . "\n" 
            . $compName
            . "\n" 
            . $userEmail 
            . "\n" 
            . $contactNumber ;

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
?>
