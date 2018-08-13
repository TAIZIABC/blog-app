<?php
namespace app\blog\controller;
use think\Db;

class Index{
	public function index(){
		echo '1111';
		$res = db('user')->find();
		// $res = json_encode($res);
		$res=Db::table('user')->select();
		dump($res);
	}
}