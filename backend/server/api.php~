<?php
 
 
//auth
if(isset($_SERVER['PHP_AUTH_USER'])&&!empty($_SERVER['PHP_AUTH_USER'])){
	$user=$_SERVER['PHP_AUTH_USER'];
	$pass=hash("sha256",$_SERVER['PHP_AUTH_PW']);
	
	$authed=false;
	//check credentials
	//TODO more error checking
	$STMT=$db->prepare("SELECT * FROM users WHERE name=:username");
	$STMT->execute(array(':username'=>$user));
	$RES = $STMT->fetch(PDO::FETCH_ASSOC);
	while($RES!==FALSE){
		if($pass==$RES["pass"]){
			$authed=true;
			break;
		}
		$RES = $STMT->fetch(PDO::FETCH_ASSOC);
	}
	$STMT->closeCursor(); 
 
 if ($authed) {
 
 
 # auf Callback-Parameter prüfen
	if(isset($_GET["callback"])&&!empty($_GET["callback"])) {
	$callback=$_GET["callback"];
	# Rückmeldung zusammenbauen
	$db=new PDO("sqlite:schichtsalat.db3");
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
        
        $retVal["status"]="ok";
        
        
		
		if(isset($_GET['settings'])){
		
			//query('settings', $retVal);
			$STMT=$db->query("SELECT * FROM ". "settings");
        if($STMT!==FALSE){
                $retVal["settings"]=$STMT->fetchAll(PDO::FETCH_ASSOC);
                $STMT->closeCursor();
        }
        else{
                $retVal["status"]="Failed to create statement";
        }
			//query("map_defaults", $retVal);
			$STMT=$db->query("SELECT * FROM ". "map_defaults");
        if($STMT!==FALSE){
                $retVal["map_defaults"]=$STMT->fetchAll(PDO::FETCH_ASSOC);
                $STMT->closeCursor();
        }
        else{
                $retVal["status"]="Failed to create statement";
        }
		}
		if(isset($_GET['groups'])) {
			//query("groups", $retVal);
			$STMT=$db->query("SELECT * FROM ". "groups");
        if($STMT!==FALSE){
                $retVal["groups"]=$STMT->fetchAll(PDO::FETCH_ASSOC);
                $STMT->closeCursor();
        }
        else{
                $retVal["status"]="Failed to create statement";
        }
		}
		if(isset($_GET['layers'])) {
			//query('layers', $retVal);
			$STMT=$db->query("SELECT * FROM ". "layers");
        if($STMT!==FALSE){
                $retVal["layers"]=$STMT->fetchAll(PDO::FETCH_ASSOC);
                $STMT->closeCursor();
        }
        else{
                $retVal["status"]="Failed to create statement";
        }
		}
		
	header("Content-Type: application/javascript");
	# Rückmeldung senden
	echo $callback."('".json_encode($retVal)."')";
	}
	}
	else {

	header("WWW-Authenticate: Basic realm=\"SmartMonitor API Access\"");
    header("HTTP/1.0 401 Unauthorized");
	?>
		No.
	<?php
}
}
	
?>
