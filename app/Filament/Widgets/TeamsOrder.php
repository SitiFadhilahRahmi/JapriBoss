<?php

namespace App\Filament\Widgets;

use App\Models\Team;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class TeamsOrder extends BaseWidget
{
    public function table(Table $table): Table
    {
        return $table
            ->query(
                Team::query()
            )
            ->defaultSort("created_at", "desc")
            ->columns([
                Tables\Columns\ImageColumn::make('avatar.path')
                    ->default("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541")
                    ->circular()
                    ->searchable(),
                Tables\Columns\TextColumn::make("name"),
                Tables\Columns\TextColumn::make("origin"),
                Tables\Columns\TextColumn::make("position.name")
                    ->badge()
            ]);
    }
}
