<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use Unisharp\Laravelfilemanager\Events\ImageWasUploaded;
use App\Providers\UploadListener;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.p
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        ImageWasUploaded::class => [
            UploadListener::class,
        ],
        
    ];


    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
