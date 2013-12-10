<?php

	function setup($dbname) {
		
		$db=new PDO($dbname);
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
		return $db;
	}


	function main() {
		
		$output = "";
		$dbname = "sqlite:schichtsalat.db3";
		$db = setup($dbname);
		$output = "status: \"ok\"";
		
		if(isset($_POST)) {
			if(setupAuth()) {
				
				return;
			}
		}
		if(!isCallback()) {
			$_GET["callback"];
			$output = $callback . "(" . $output . ")";
		}
		print $output;
	}


	function setupAuth() {
		
	}



	function isCallback() {
		if(isset($_GET["callback"])&&!empty($_GET["callback"])) {
			return true;
		}
		return false;
	}
	main();
?>