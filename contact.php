<?php
if($_POST){

    $name = $_POST['portfolio_fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $gender = $_POST['gender'];
    $country = $_POST['country'];
    $message = $_POST['message'];


    if(empty($name) || empty($email) || empty($message)){

        echo "Please fill all required fields.";

    }
    else{

        echo "Form Submitted Successfully!<br><br>";

        echo "Name: " . $name . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Phone: " . $phone . "<br>";
        echo "Subject: " . $subject . "<br>";
        echo "Gender: " . $gender . "<br>";
        echo "Country: " . $country . "<br>";
        echo "Message: " . $message . "<br>";

    }

}
else{

    echo "Please submit the form.";
}
?>