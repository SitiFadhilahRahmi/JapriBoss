<?php

namespace App\Filament\Widgets;

use App\Models\Post;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class BlogPostsChart extends ChartWidget
{
    protected static ?string $heading = 'Blog Posts';

    protected static ?int $sort = 2;

    protected function getData(): array
    {
        $createdPosts = Trend::model(Post::class)
            ->between(
                start: now()->startOfWeek(),
                end: now()->endOfWeek()
            )
            ->perDay()
            ->count();

        $publishedPosts = Trend::model(Post::class)
            ->between(
                start: now()->startOfWeek(),
                end: now()->endOfWeek()
            )
            ->perDay()
            ->count('published_at');


        return [
            'datasets' => [
                [
                    'label' => 'Blog posts created',
                    'data' => $createdPosts->map(fn(TrendValue $value) => $value->aggregate),
                    'backgroundColor' => '#FF0000',
                    'borderColor' => '#CC0000',
                ],
                [
                    'label' => 'Blog posts published',
                    'data' => $publishedPosts->map(fn(TrendValue $value) => $value->aggregate),
                    'backgroundColor' => '#00FF02',
                    'borderColor' => '#00FF00',
                ],
            ],
            'labels' => $createdPosts->map(fn(TrendValue $value) => $value->date),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
