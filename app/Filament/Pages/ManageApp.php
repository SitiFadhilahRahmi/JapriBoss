<?php

namespace App\Filament\Pages;

use App\Settings\AppSetting;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Pages\SettingsPage;

class ManageApp extends SettingsPage
{
    protected static ?string $navigationIcon = 'heroicon-o-cog';

    protected static ?string $navigationLabel = 'App Settings';

    protected static ?string $title = 'Application Settings';

    protected static string $settings = AppSetting::class;

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make()->schema([
                    Forms\Components\Section::make([
                        Forms\Components\TextInput::make('site_title')
                            ->label('Site Title')
                            ->placeholder("Laravel - site_subtitle")
                            ->helperText('Your site title for SEO')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('site_subtitle')
                            ->label('Site Subtitle')
                            ->placeholder("site_title - Welcome!")
                            ->helperText('Your Site subtitle for SEO')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('site_author')
                            ->label('Site Author')
                            ->placeholder("e.g Jhon Doe, Company Name")
                            ->helperText('Your author site for SEO')
                            ->maxLength(255),
                        Forms\Components\Textarea::make('site_descripiton')
                            ->rows(5)
                            ->placeholder("Your site description!")
                            ->helperText('Your Site description for SEO')
                            ->maxLength(255),
                    ]),
                    Forms\Components\Section::make("Social Media")
                        ->schema([
                            Forms\Components\Repeater::make("social_media")->schema([
                                Forms\Components\TextInput::make('name')
                                    ->helperText('Name of the sociale media platform')
                                    ->placeholder("e.g Instagram, Youtube")
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('url')
                                    ->label("Url of the social media")
                                    ->placeholder('https://platform.com/app')
                                    ->helperText("Url of your social media account")
                                    ->maxLength(255),
                            ])->columns(2),
                        ])
                        ->collapsible(),
                    Forms\Components\Section::make("Langauges")
                        ->schema([
                            Forms\Components\Repeater::make("languages")->schema([
                                Forms\Components\TextInput::make('name')
                                    ->helperText('Name of the language')
                                    ->placeholder("e.g Bahasa Indonesia, Engglish, China")
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('iso_code')
                                    ->label("ISO 3166 Code")
                                    ->helperText('iso code of country')
                                    ->placeholder("e.g ID, EN, CN")
                                    ->maxLength(255),
                            ])->columns(2),
                        ])
                        ->collapsible()
                ])->columns(["sm" => 1])->columnSpan(2),
                Forms\Components\Section::make("Media")
                    ->description("Your app media")
                    ->schema([
                        CuratorPicker::make('logo')
                            ->label('Logo')
                            ->helperText('Recommended size: 200x50')
                            ->required(false),

                        CuratorPicker::make('favicon')
                            ->label('Favicon')
                            ->helperText('Recommended size: 32x32')
                            ->required(false),
                    ])
                    ->columnSpan(1),
            ])->columns(3);
    }
}
