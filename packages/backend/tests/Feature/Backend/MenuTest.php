<?php
/**
 * JUZAWEB CMS - The Best CMS for Laravel Project
 *
 * @package    juzaweb/juzacms
 * @author     The Anh Dang <dangtheanh16@gmail.com>
 * @link       https://juzaweb.com/cms
 * @license    MIT
 */

namespace Juzaweb\Backend\Tests\Feature\Backend;

use Faker\Generator as Faker;
use Juzaweb\Backend\Models\Menu;
use Juzaweb\Backend\Tests\TestCase;

class MenuTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        
        $this->authUserAdmin();
    }
    
    public function testMakeMenu()
    {
        $faker = app(Faker::class);
        $data = ['name' => $faker->sentence(5)];
        
        $response = $this->post("/admin-cp/menus/store", $data);
        
        $response->assertStatus(302);
        
        $this->assertDatabaseHas('menus', $data);
    
        $data = ['name' => ''];
        $response = $this->post("/admin-cp/menus/store", $data);
        $response->assertStatus(302);
    
        $response->assertSessionHasErrors('name');
    }
    
    public function testEdit()
    {
        $menu = Menu::first();
    
        $this->get("/admin-cp/menus/{$menu->id}")
            ->assertStatus(200);
    }
}
