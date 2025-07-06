<?php

namespace App\Filament\Widgets;

use App\Models\Post;
use App\Models\Team;
use App\Models\Testimonial;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class DataOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Posts', Post::count())
                ->description("Number of posts created")
                ->descriptionIcon("heroicon-o-pencil-square")
                ->color("success"),
            Stat::make('Teams', Team::count())
                ->description("Number of team members")
                ->descriptionIcon("heroicon-o-users")
                ->color("info"),
            Stat::make('Testimonials', Testimonial::count())
                ->description("Testimonials from clients")
                ->descriptionIcon("heroicon-o-chat-bubble-bottom-center-text")
                ->color("warning"),
        ];
    }
}
