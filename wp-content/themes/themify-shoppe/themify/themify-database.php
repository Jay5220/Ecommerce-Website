<?php
/***************************************************************************
 *
 * 	----------------------------------------------------------------------
 * 						DO NOT EDIT THIS FILE
 *	----------------------------------------------------------------------
 * 
 *  				     Copyright (C) Themify
 * 
 *	----------------------------------------------------------------------
 *
 ***************************************************************************/

/* 	Database Functions
/***************************************************************************/

/**
 * Save Data
 * @param Array $data
 * @return String
 * @since 1.0.0
 * @package themify
 */
function themify_set_data( $data ) {
	if ( empty( $data ) || ! is_array( $data ) ) {
            $data = array();
	}
	else{
		unset($data['save'],$data['page']);
		foreach ( $data as $name => $value ) {
			if ($value==='' || $value==='default' || $value==='[]') {
				unset( $data[$name] );
			}
		}
	}
	update_option( 'themify_data', $data,false );
	return themify_get_data(true);
}

/**
 * Return cached data
 * @return array|String
 */
function themify_get_data($reinit=false,$from=false) {
    static $data=null;
    if ($data===null || $reinit!==false) {
        $dir=themify_upload_dir('basedir').'/';
        $prefix='themify_settings_'. basename(dirname(__DIR__));
        $fname=$prefix.'_'.THEMIFY_VERSION.'_'.Themify_Enqueue_Assets::$themeVersion;
        $orig=$fname.'.php';
        if($reinit!==true && $from!=='db' && is_file($dir.$orig)){
	    include $dir.$orig;
	    if(isset($_arr)){
		    $data =$_arr;
	    }
        }
        if($data===null || $reinit===true){
            $data = themify_sanitize_data(get_option( 'themify_data', array() ));
            if($reinit===false){
                $data = apply_filters( 'themify_get_data', $data );
            }
            if((Themify_Filesystem::mkdir($dir,true,0777)) && (!is_file($dir.$orig) || is_writable($dir.$orig))){
                $str="<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly";
                $str.=PHP_EOL.'$_arr='.var_export ($data,true).';';
                file_put_contents($dir.$fname.'_new.php', $str);//create a tmp file than rename,because the rename is atomic
                if (rename($dir.$fname.'_new.php',$dir.$orig) && ($handle = opendir($dir))) {//remove old caches
                    while (false !== ($f = readdir($handle))) {
                        if ($f !== '.' && $f !== '..' && $f!==$orig  && strpos($f, $prefix) === 0 && pathinfo($f,PATHINFO_EXTENSION)=== 'php') {
                            unlink($dir . $f);
                        }
                    }
                    closedir($handle);
                    clearstatcache();
                }
            }
        }
    }
    return $data;
}

/**
 * Abstract away normalizing the data
 * @param $data
 * @return array
 */
function themify_sanitize_data( $data ) {
	if ( is_array( $data ) && !empty( $data )) {
		foreach( $data as $name => $value ){
			if ( in_array( $name, array( 'setting-custom_css', 'setting-header_html', 'setting-footer_html', 'setting-footer_text_left', 'setting-footer_text_right', 'setting-homepage_welcome', 'setting-store_info_address' ),true )
				|| ( false !== stripos( $name, 'setting-hooks' ) )
			) {
				$data[$name] = str_replace( "\'", "'", $value );
			} else {
				$data[$name] = stripslashes( $value );
			}
		}
		return $data;
	}
	return array();
}