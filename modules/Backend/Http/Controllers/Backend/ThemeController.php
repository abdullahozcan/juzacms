<?php

namespace Juzaweb\Backend\Http\Controllers\Backend;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Juzaweb\Backend\Http\Requests\Theme\UpdateRequest;
use Juzaweb\Backend\Http\Resources\ThemeResource;
use Juzaweb\CMS\Http\Controllers\BackendController;
use Juzaweb\CMS\Facades\Theme;
use Juzaweb\CMS\Facades\Plugin;
use Juzaweb\CMS\Support\ArrayPagination;
use Juzaweb\CMS\Support\JuzawebApi;
use Juzaweb\CMS\Support\Updater\ThemeUpdater;

class ThemeController extends BackendController
{
    public function index(): View
    {
        $activated = jw_current_theme();
        $currentTheme = Theme::getThemeInfo($activated);

        return view(
            'cms::backend.theme.index',
            [
                'title' => trans('cms::app.themes'),
                'currentTheme' => $currentTheme,
                'activated' => $activated,
            ]
        );
    }

    public function getDataTheme(Request $request): AnonymousResourceCollection
    {
        $limit = $request->get('limit', 20);
        $activated = jw_current_theme();

        $paginate = ArrayPagination::make(Theme::all(true));
        $paginate->where('name', '!=', $activated);

        $rows = $paginate->paginate($limit);
        $items = new Collection();
        foreach ($rows->items() as $key => $row) {
            $items->push((object) $row);
        }

        $rows->setCollection($items);

        return ThemeResource::collection($rows);
    }

    public function activate(Request $request): JsonResponse
    {
        $request->validate(
            [
                'theme' => 'required',
            ]
        );

        $theme = $request->post('theme');
        if (! Theme::has($theme)) {
            return $this->error(
                [
                    'message' => trans('cms::message.theme_not_found'),
                ]
            );
        }

        $this->setThemeActive($theme);
        $info = Theme::getThemeInfo($theme);

        if ($require = $info->get('require')) {
            $plugins = Plugin::all();
            $str = [];
            foreach ($require as $plugin => $ver) {
                if (app('plugins')->isEnabled($plugin)) {
                    continue;
                }

                if (!in_array($plugin, array_keys($plugins))) {
                    $plugins[$plugin] = $plugin;
                }

                $str[] = "<strong>{$plugin}</strong>";
            }

            add_backend_message(
                'require_plugins',
                [
                    trans('cms::app.theme_require_plugins') .' '
                    . implode(', ', $str) . '
                        . <a href="'. route('admin.themes.require-plugins') .'"><strong>'
                    . trans('cms::app.activate_plugins')
                    .'</strong></a>',
                ],
                'warning'
            );
        }

        return $this->success(
            [
                'redirect' => route('admin.themes'),
            ]
        );
    }

    public function install(): View
    {
        $title = trans('cms::app.install');

        $this->addBreadcrumb(
            [
                'title' => trans('cms::app.themes'),
                'url' => route('admin.themes')
            ]
        );

        return view(
            'cms::backend.theme.install',
            compact('title')
        );
    }

    public function update(UpdateRequest $request, ThemeUpdater $updater): JsonResponse
    {
        $updater = $updater->find($request->input('theme'));

        try {
            $updater->update();
        } catch (\Exception $e) {
            report($e);
            return $this->error($e->getMessage());
        }

        return $this->success(
            trans('cms::app.install_successfully')
        );
    }

    public function getDataThemeInstall(Request $request, JuzawebApi $api): object|array
    {
        $limit = $request->get('limit', 20);
        $page = $request->get('page', 1);
        $except = array_keys(Theme::all(true));

        return $api->get(
            'themes',
            [
                'limit' => $limit,
                'page' => $page,
                'except' => $except
            ]
        );
    }

    protected function setThemeActive($theme): void
    {
        DB::beginTransaction();
        try {
            Cache::pull(cache_prefix('jw_theme_configs'));

            $themeStatus = [
                'name' => $theme,
                'namespace' => 'Theme\\',
                'path' => config('juzaweb.theme.path') .'/'.$theme,
            ];

            set_config('theme_statuses', $themeStatus);

            Artisan::call(
                'theme:publish',
                [
                    'theme' => $theme,
                    'type' => 'assets',
                ]
            );

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
