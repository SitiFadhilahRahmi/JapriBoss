<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('app.site_title', "Laravel");
        $this->migrator->add('app.site_subtitle', "Welcome!");
        $this->migrator->add('app.site_author', "Admin");
        $this->migrator->add('app.site_description', "Your site description!");
        $this->migrator->add('app.social_media', []);
        $this->migrator->add('app.languages', [["name" => "Indonesia", "iso_code" => "ID"]]);
        $this->migrator->add('app.favicon', null);
        $this->migrator->add('app.logo', null);
    }
};
