<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

//Service
use App\Services\ProjectsService;
use App\Services\ProjectDetailedService;

//Interface
use App\Interfaces\ProjectsServiceInterface;
use App\Interfaces\ProjectDetailedServiceInterface;
use App\Interfaces\UserServiceInterface;
use App\Services\UserService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(ProjectsServiceInterface::class, ProjectsService::class);
        $this->app->bind(ProjectDetailedServiceInterface::class, ProjectDetailedService::class);
        $this->app->bind(UserServiceInterface::class, UserService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
