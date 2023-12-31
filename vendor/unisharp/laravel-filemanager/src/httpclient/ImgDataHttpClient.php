<?php

namespace Unisharp\Laravelfilemanager\httpclient;

use GuzzleHttp\Client;

class ImgDataHttpClient {

    private static $api_prefix = '/api/v1/news_images';

    public function __construct()
    {
    }

    public static function storeImgEntity($filename, $data) {
        $client = new Client();
        $response = $client->request('POST', self::getApiUriPrefix() . '/filename/' . $filename, ['form_params'=>$data]);
        if ($response->getStatusCode() === 200) {
            return true;
        }
        return false;
    }

    public static function getImgEntity($filename) {
        $client = new Client();
        $response = $client->request('GET', self::getApiUriPrefix() . '/filename/' . $filename);
        $resObj = json_decode($response->getBody());
        
        $entity = [];
        if ($resObj->status->code === 200) {
            $entity = $resObj->data;
        }
        return $entity;
    }

    public static function deteleImgEntity($filename) {
        $client = new Client();
        $response = $client->request('DELETE', self::getApiUriPrefix() . '/filename/' . $filename);
    }

    public static function updateImgEntity($id, $data) {
        $client = new Client();
        $response = $client->request('POST', self::getApiUriPrefix() . '/' . $id, ['form_params'=>$data]);
        if ($response->getStatusCode() === 200) {
            echo 'OK';
        }
    }

    public static function listFilenamesByKeywordCategories($keyword, $cat_id, $subcat_id, $page) {
        $client = new Client();
        $response = $client->request('GET', self::getApiUriPrefix(), ['query'=>['keyword'=>$keyword,
            'cat_id'=>$cat_id, 'subcat_id'=>$subcat_id, 'page'=>$page]]);

        $result = [];
        $resObj = json_decode($response->getBody());
        if ($resObj->status->code === 200) {
            return $resObj->data;
        }
        return $result;
    }

    public static function getCatMaps() {
        $client = new Client();
        $response = $client->request('GET', self::getApiUriPrefix() . '/catmaps');
        $resObj = json_decode($response->getBody());

        $entity = [];
        if ($resObj->status->code === 200) {
            $entity = $resObj->data;
        }
        return $entity;
    }

    private static function getApiUriPrefix() {
        return self::getHost() . self::$api_prefix;
    }

    private static function getHost() {
        $host = "";
        $extEnable = config('lfm.ext_enable');
        if ($extEnable) {
            $host = config('lfm.ext_host');
            //TODO for test inside homestead
            //$host = explode(':8000', $host)[0];
        }
        return $host;
    }
}