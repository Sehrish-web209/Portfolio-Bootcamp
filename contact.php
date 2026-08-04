<?php
include "db.php";
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
    elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){

    echo "Invalid email format.";
    }

    else{
    $sql = "INSERT INTO contact_messages (name, email, phone, subject, gender, country, message)
    VALUES ('$name', '$email', '$phone', '$subject', '$gender', '$country', '$message')";

    $result = mysqli_query($connection, $sql);

    if($result){
        echo "Thank you for contacting us!<br><br>";
        echo "Name: " . $name . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Phone: " . $phone . "<br>";
        echo "Subject: " . $subject . "<br>";
        echo "Gender: " . $gender . "<br>";
        echo "Country: " . $country . "<br>";
        echo "Message: " . $message . "<br>";

       echo "<br><br><a href='index.html'>← Back to Home</a>";
    }
    else{

    echo "Error: " . mysqli_error($connection);
    }
   }
}  
else{

    echo "Please submit the form.";
}
?>