<?php
/**
 * JUZAWEB CMS - The Best CMS for Laravel Project
 *
 * @package    juzaweb/juzacms
 * @author     The Anh Dang
 * @link       https://juzaweb.com/cms
 * @license    GNU V2
 */

namespace Juzaweb\Backend\Actions;

use Illuminate\Support\Arr;
use Juzaweb\CMS\Abstracts\Action;
use Juzaweb\CMS\Facades\HookAction;
use Juzaweb\CMS\Models\User;

class PermissionAction extends Action
{
    public function handle()
    {
        $this->addAction(
            Action::BACKEND_CALL_ACTION,
            [$this, 'addAdminMenu']
        );

        $this->addAction(
            Action::BACKEND_USER_FORM_RIGHT,
            [$this, 'addRoleUserForm']
        );

        $this->addAction(
            Action::BACKEND_USER_AFTER_SAVE,
            [$this, 'saveRoleUser'],
            20,
            2
        );
    }

    public function saveRoleUser($data, User $model)
    {
        $roles = Arr::get($data, 'roles', []);

        $model->syncRoles($roles);
    }

    public function addRoleUserForm(User $model)
    {
        echo e(
            view(
                'cms::backend.role.components.role_users',
                compact('model')
            )
        );
    }

    public function addAdminMenu()
    {
        HookAction::addAdminMenu(
            trans('cms::app.roles'),
            'roles',
            [
                'icon' => 'fa fa-users',
                'position' => 30,
                'parent' => 'users',
            ]
        );
    }
}
