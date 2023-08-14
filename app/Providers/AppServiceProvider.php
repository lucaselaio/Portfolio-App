<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

//Service
use App\Services\ProjectsService;

//Interface
use App\Interfaces\ProjectsServiceInterface;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(ProjectsServiceInterface::class, ProjectsService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
