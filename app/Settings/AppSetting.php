<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class AppSetting extends Settings
{
    public string $site_title = 'My App';
    public string $site_subtitle = 'Welcome!';
    public ?string $site_author = 'Admin';
    public ?string $site_description = 'Your site description';
    public ?array $contacts = [
        "email" => "laravel@example.com",
        "phone_number" => "9821-9872-0981",
        "address" => "Laravel St, Wlcome Building."
    ];
    public ?array $social_media = [];
    public ?array $languages = [];
    public ?string $logo = null;
    public ?string $favicon = null;

    public static function group(): string
    {
        return 'app';
    }
}
