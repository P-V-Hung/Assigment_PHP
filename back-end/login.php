<?php
    session_start();
    require "function.php";
        if(isset($_POST['btn_login'])){
        $error = [];
        if(empty($_POST['username'])){
            $error['username'] = "Không được để trống";
        }else{
            if(!preg_match("/^[A-Za-z0-9]{8,36}$/",$_POST['username'])){
                $error['username'] = "Username không đúng định dạng";
            }else{
                $username = $_POST['username'];
            }
        }
        if(empty($_POST['password'])){
            $error['password'] = "Không được để trống";
        }else{
            if(!preg_match("/^[A-Za-z0-9]{8,36}$/",$_POST['password'])){
                $error['password'] = "Password không đúng định dạng";
            }else{   
                $password = $_POST['password'];
            }
        }
        if(empty($error)){
            $_SESSION["username"] = $username;
            $_SESSION["password"] = $password;
            header("Location: ../font-end/index.php");
        }else{
            if(isset($error['username'])){
                $_SESSION["errorusername"] = $error['username'];
            }
            if(isset($error['password'])){
                $_SESSION["errorpassword"] = $error['password'];
            }
            header("Location: ../font-end/index.php");
        }
    }
?>