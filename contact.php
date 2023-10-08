<?php

require_once ("mysqli-class/MysqliDb.php");
require_once (".env.php");

$db = new MysqliDb($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_DATABASE);

// $messages = $db->get('tblMessage');

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$data = array(
    "name" => $name,
    "email" => $email,
    "message" => $message
);

$id = $db->insert('tblContact', $data);

echo json_encode($id);