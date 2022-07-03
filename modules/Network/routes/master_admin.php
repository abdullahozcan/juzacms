<?php
/**
 * JUZAWEB CMS - The Best CMS for Laravel Project
 *
 * @package    juzaweb/juzacms
 * @author     Juzaweb Team <admin@juzaweb.com>
 * @link       https://juzaweb.com
 * @license    MIT
 */

use Juzaweb\Network\Http\Controllers\PluginController;
use Juzaweb\Network\Http\Controllers\DashboardController;
use Juzaweb\Network\Http\Controllers\SiteController;
use Juzaweb\Network\Http\Controllers\ThemeController;

Route::get('/', [DashboardController::class, 'index'])->name('admin.network.dashboard');

Route::jwResource('sites', SiteController::class, ['name' => 'network.sites']);

Route::jwResource('themes', ThemeController::class, ['name' => 'network.themes']);
Route::get('theme/install', [ThemeController::class, 'install'])->name('admin.network.theme.install');

Route::jwResource('plugins', PluginController::class, ['name' => 'network.plugins']);
Route::get('plugin/install', [PluginController::class, 'install'])->name('admin.network.plugin.install');
