<?php
include("connect.php");

//Create table Restaurant
$conn->query("CREATE TABLE IF NOT EXISTS `restaurant` (
  `id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `faculty` varchar(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `suggestedmenu` varchar(50) NOT NULL,
  `img_src` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12");

//Insert table Restaurant data

?>
