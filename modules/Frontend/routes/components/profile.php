<?php
/**
 * JUZAWEB CMS - The Best CMS for Laravel Project
 *
 * @package    juzaweb/juzacms
 * @author     The Anh Dang
 * @link       https://juzaweb.com/cms
 * @license    GNU V2
 */

use Juzaweb\Frontend\Http\Controllers\ProfileController;

Route::group(
    [
        'middleware' => 'auth',
        'prefix' => 'profile'
    ],
    function () {
        Route::get('notification', [ProfileController::class, 'notification'])
            ->name('profile.notification');
        Route::get('change-password', [ProfileController::class, 'changePassword'])
            ->name('profile.change_password');
        Route::post('change-password', [ProfileController::class, 'doChangePassword']);
        Route::get('/{slug?}', [ProfileController::class, 'index'])
            ->name('profile');
    }
);
