<?php
if ($_POST) {
  include("connect.php");
  $loc = $_POST['location'];
  $type = $_POST['foodtype'];
  if (($loc == "any") && ($type == "any")) {
    $data = mysql_query("SELECT * FROM `restaurant`");
  }
  else if (($loc == "any") && ($type != "any")) {
    $data = mysql_query("SELECT * FROM `restaurant` WHERE `type` = '$type'");
  }
  else if (($loc != "any") && ($type == "any")) {
    $data = mysql_query("SELECT * FROM `restaurant` WHERE `faculty` = '$loc'");
  }
  else {
    $data = mysql_query("SELECT * FROM `restaurant` WHERE `faculty` = '$loc' AND `type` = '$type'");
  }
  if (mysql_num_rows($data) == 0) {
    $arrres = [];
  }
  else {
    $arrres = array();
    while ($row_data = mysql_fetch_array($data)) {
      $thisrow = array("faculty"=>$row_data['faculty'],"name"=>$row_data['name'],
                       "type"=>$row_data['type'],"suggested"=>$row_data['suggestedmenu'],
                       "img_src"=>$row_data['img_src']);
      array_push($arrres, $thisrow);
    }
  }
  echo json_encode($arrres);
}
?>
