<?php
/**
 * JUZAWEB CMS - The Best CMS for Laravel Project
 *
 * @package    juzaweb/juzacms
 * @author     The Anh Dang
 * @link       https://juzaweb.com/cms
 * @license    GNU V2
 */

namespace Juzaweb\CMS\Traits;

use Rennokki\QueryCache\Traits\QueryCacheable;

trait ModelCache
{
    use QueryCacheable;

    protected static $flushCacheOnUpdate = true;
}
