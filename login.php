<?php 
header("Access-Control-Allow-Origin: *"); 
require '../wp-load.php';

$requst_arr = getallheaders();
$username = trim($_REQUEST['username']);
$password = trim( $_REQUEST['password'] );

$result = user_login( $username, $password );
echo json_encode($result);

function user_login( $username, $password ) {
	$res_arr = array();
	if ( empty( $username ) || empty( $password ) ) {
		$res_arr['errormsg'] = 'Required field is missing';
        return $res_arr;
		//return $errors;
	}
	$user_id = username_exists( $username );
	$user = user_pass_ok( $username, $password );  
	if(! empty ($user_id)){
		$user_data = get_userdata( $user_id );
		if($user == 1){
			$res_arr['Id'] = $user_id;
			$res_arr['username'] = $username;
		return $res_arr;
		}else{
			$res_arr['errormsg'] = 'Invalid password';
			return $res_arr;
		}
	}else{
		$res_arr['errormsg'] = 'Invalid username';
		return $res_arr;
	}
	
}

?>