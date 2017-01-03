<?php
include("config.php");
$conn = new mysqli($server_host, $server_user, $server_password, $database_name);
$conn->query("SET NAMES UTF8");
?>
