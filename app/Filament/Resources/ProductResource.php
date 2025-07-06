<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationGroup = 'Content';

    protected static ?string $navigationIcon = 'heroicon-o-cube';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make()->schema([
                    Forms\Components\Section::make([
                        Forms\Components\TextInput::make('name')
                            ->helperText("The name of this product")
                            ->placeholder("Untitled Product")
                            ->required()
                            ->live(true)
                            ->afterStateUpdated(function (Get $get, Set $set, ?string $old, ?string $state) {
                                if (($get('slug') ?? '') !== Str::slug($old)) {
                                    return;
                                }
                                $set('slug', Str::slug($state));
                            })
                            ->maxLength(255),
                        Forms\Components\TextInput::make('slug')
                            ->helperText("The slug of this post")
                            ->placeholder("untitled-post")
                            ->unique(ignoreRecord: true)
                            ->readOnly()
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('category')
                            ->helperText("The category of this product")
                            ->placeholder("e.g Clothes, Hat")
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Textarea::make('description')
                            ->helperText("The description of this product")
                            ->placeholder("This product is a good product")
                            ->required()
                            ->rows(5)
                            ->columnSpanFull(),
                    ]),
                    Forms\Components\Section::make("spesifications")->schema([
                        Forms\Components\Repeater::make('spesification')->schema([
                            Forms\Components\TextInput::make('key')
                                ->helperText("The key of specification")
                                ->placeholder("e.g Material"),
                            Forms\Components\TextInput::make('value')
                                ->helperText("The value of specification key")
                                ->placeholder("e.g Cotton"),
                        ])->columns(2),
                    ])->collapsed(true)->collapsible()
                ])->columns(["sm" => 2])->columnSpan(2),
                Forms\Components\Section::make("Time Stamps")
                    ->description("details of when data was changed and also created")
                    ->schema([
                        Forms\Components\Select::make('language')
                            ->helperText("The language of this post")
                            ->placeholder("Indonesia")
                            ->required()
                            ->options([
                                "ID" => "Indonesia",
                                "EN" => "English",
                                "CN" => "China"
                            ])
                            ->native(false)
                            ->default("ID"),
                        CuratorPicker::make("thumbnail_id")
                            ->label("Thumbnail")
                            ->helperText("Post thumbnail image")
                            ->multiple()
                            ->imageCropAspectRatio(
                                '16:9',
                                '4:3',
                                '1:1',
                            )->relationship("productPictures", "id"),
                        Forms\Components\Placeholder::make("created_at")
                            ->content(fn(?Product $record): string => $record ? date_format($record->created_at, "M d, Y") : "-"),
                        Forms\Components\Placeholder::make("updated_at")
                            ->content(fn(?Product $record): string => $record ? date_format($record->updated_at, "M d, Y") : "-"),
                    ])->columnSpan(1),
            ])->columns(3);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('productPictures.path')
                    ->circular()
                    ->size(50)
                    ->stacked()
                    ->ring(5),
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\TextColumn::make('category')
                    ->searchable(),
                Tables\Columns\TextColumn::make('description')
                    ->limit(50)
                    ->searchable(),
                Tables\Columns\TextColumn::make('language')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->date()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])

            ->emptyStateIcon('heroicon-o-cube')
            ->emptyStateDescription('Create new post data here.')
            ->emptyStateActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make()
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                //
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }


    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
