<?php
include("connect.php");
$restaurant = $conn->query("SELECT * FROM `restaurant` ORDER BY `id` ASC");
$out = array();
while ($row_restaurant = $restaurant->fetch_array()) {
  $thisrow = array();
  $thisrow['id'] = $row_restaurant['id'];
  $thisrow['faculty'] = $row_restaurant['faculty'];
  $thisrow['name'] = $row_restaurant['name'];
  $thisrow['type'] = $row_restaurant['type'];
  $thisrow['suggestedmenu'] = $row_restaurant['suggestedmenu'];
  $thisrow['img_src'] = $row_restaurant['img_src'];
  array_push($out, $thisrow);
}
echo json_encode($out);
header("Content-type: application/json");
?>
