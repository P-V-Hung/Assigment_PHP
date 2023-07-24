<?php
    session_start();
    require "function.php";
    require "danhsachsp.php";
    showArray($_POST);
    if(isset($_POST["btn_addSP"])){
        $newSP = array(
            'img' => $_POST["url"],
            'title' => $_POST["title"],
            'price' => $_POST["price"],
            'count' => $_POST["count"]
        );
        array_push($listSP, $newSP);
    }

    showArray($listSP);
?>