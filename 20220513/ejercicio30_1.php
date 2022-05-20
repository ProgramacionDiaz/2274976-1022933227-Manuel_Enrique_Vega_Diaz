<?php
session_start();
if( isset($SESSION["usuario"])){

    echo "Usuario: "["usuario"]." estatus: ".$_SESSION["estatus"];

}else{

    echo "No hay datos";
}
?>