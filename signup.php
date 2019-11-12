<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
include('config.ini.php');

$contendata = file_get_contents("php://input");
$getdata = json_decode($contendata);

$name = $getdata->name;
$sname = $getdata->sname;
$email = $getdata->email;
$username = $getdata->username;
$password = $getdata->password;

$sql = "INSERT INTO member(mem_name,mem_sname,mem_em,username,password)
VALUES ('$name','$sname','$email','$username','$password')";
$result = mysqli_query($con,$sql);

?> 
