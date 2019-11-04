<?php
$servername="localhost";
$username="root";
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$cmd1="CREATE DATABASE trial_db";
// sql to create table
 $cmd2 = "CREATE TABLE trial_db.info (
 index_no INT(2) AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(30) NOT NULL,
 phone INT(10) NOT NULL,
 colour VARCHAR(15),
 gender VARCHAR(20))";
if ($conn->query( $cmd2) === TRUE) {
    echo "Successfull";
} else {
    echo "Error " . $conn->error;
}
$conn->close();
?>
