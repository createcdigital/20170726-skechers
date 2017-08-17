<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/7 0007
 * Time: 下午 5:11
 */

require_once 'jssdk.php';
$jssdk = new Jssdk("wxd4f26aea63a05347", "ee83c1915b59d37aa47c14d9e590b052");
$signPackage = $jssdk->GetSignPackage();
$appId = $signPackage["appId"];
$timestamp = $signPackage["timestamp"];
$nonceStr = $signPackage["nonceStr"];
$signature = $signPackage["signature"];
$ary['appId'] = $appId;
$ary['timestamp'] = $timestamp;
$ary['nonceStr'] = $nonceStr;
$ary['signature'] = $signature;
echo json_encode($ary);
?>