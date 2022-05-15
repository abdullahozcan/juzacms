<?php
/**
 * JUZAWEB CMS - The Best CMS for Laravel Project
 *
 * @package    juzaweb/juzacms
 * @author     The Anh Dang
 * @link       https://juzaweb.com/cms
 * @license    GNU V2
 */

use Juzaweb\Backend\Http\Controllers\API\UserController;

Route::group(
    [
        'prefix' => 'user',
        'middleware' => 'auth:sanctum',
    ],
    function () {
        Route::apiResource('/', UserController::class);
    }
);
