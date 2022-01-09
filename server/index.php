<?php
require_once __DIR__.'/database.php';

$path="../server/img/";
$matchesFiltered = [];
$city=$_GET["city"];

foreach($matches as $key => $value){
  $matches[$key]["away_team"]["logo"] = $path.$matches[$key]["away_team"]["logo"];
  $matches[$key]["home_team"]["logo"] = $path.$matches[$key]["home_team"]["logo"];
}

if(empty($_GET)||$city===""){
  $matchesFiltered = $matches;
}else{
  foreach($matches as $match){
    if(array_search($city,$match)){
        array_push($matchesFiltered,$match);
    }
  }
}

header('content-type : application/json');
echo json_encode($matchesFiltered);

?>
