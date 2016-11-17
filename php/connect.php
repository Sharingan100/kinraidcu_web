<?php
include("config.php");
$conn = mysql_connect($server_host, $server_user, $server_password);
mysql_select_db($database_name);
mysql_query("SET NAMES UTF8");
?>
