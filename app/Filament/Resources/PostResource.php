<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Filament\Resources\PostResource\RelationManagers;
use App\Filament\Resources\PostResource\Widgets\PostOverview;
use App\Models\Post;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms;
use Filament\Forms\Components\SpatieTagsInput;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationGroup = 'Content';

    protected static ?string $navigationIcon = 'heroicon-o-pencil-square';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make([
                    Forms\Components\TextInput::make('title')
                        ->helperText("The title of this post")
                        ->placeholder("Untitled Post")
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
                    Forms\Components\Select::make('category_id')
                        ->helperText("The category of this post content")
                        ->placeholder("untitled-post")
                        ->searchable()
                        ->relationship("category", "name")
                        ->createOptionForm([
                            Forms\Components\TextInput::make('name')
                                ->placeholder("Propgramming")
                                ->live(true)
                                ->afterStateUpdated(function (Get $get, Set $set, ?string $old, ?string $state) {
                                    if (($get('slug') ?? '') !== Str::slug($old)) {
                                        return;
                                    }

                                    $set('slug', Str::slug($state));
                                })
                                ->helperText("Name of the category")
                                ->required()
                                ->maxLength(255),
                            Forms\Components\TextInput::make('slug')
                                ->placeholder("programming")
                                ->unique(ignoreRecord: true)
                                ->helperText("Result slug of the category")
                                ->required()
                                ->maxLength(255),
                            Forms\Components\Textarea::make('description')
                                ->rows(4)
                                ->columnSpanFull()
                                ->helperText("The category description")
                                ->placeholder("Thos **** category is so good")
                                ->maxLength(255),
                        ])
                        ->required(),
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
                    Forms\Components\Textarea::make('excerpt')
                        ->helperText("small snippet of post content")
                        ->placeholder("Good post..")
                        ->columnSpanFull()
                        ->rows(4)
                        ->maxLength(255),
                    Forms\Components\RichEditor::make('content')
                        ->helperText("The main section of this post")
                        ->placeholder("Good post will have good reader")
                        ->required()
                        ->columnSpanFull(),
                ])->columns(["sm" => 2])->columnSpan(2),
                Forms\Components\Section::make("Time Stamps & Thumbnail")
                    ->description("details of when data was changed and also created")
                    ->schema([
                        Forms\Components\DatePicker::make('published_at')
                            ->suffixIcon("heroicon-o-calendar")
                            ->placeholder("MM / DD / YYY")
                            ->native(false),
                        CuratorPicker::make("thumbnail_id")
                            ->label("Thumbnail")
                            ->helperText("Post thumbnail image")
                            ->imageCropAspectRatio(
                                '16:9',
                                '4:3',
                                '1:1',
                            )->relationship("thumbnail", "path"),
                        SpatieTagsInput::make('tags'),
                        Forms\Components\Placeholder::make("created_at")
                            ->content(fn(?Post $record): string => $record ? date_format($record->created_at, "M d, Y") : "-"),
                        Forms\Components\Placeholder::make("updated_at")
                            ->content(fn(?Post $record): string => $record ? date_format($record->updated_at, "M d, Y") : "-"),
                    ])->columnSpan(1),
            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('thumbnail.path')
                    ->default("https://cdn-icons-png.flaticon.com/512/13434/13434972.png")
                    ->sortable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('excerpt')
                    ->searchable(),
                Tables\Columns\TextColumn::make('category.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('author.name')
                    ->state(fn(Post $record) => $record->user_id === Auth::id() ? "You" : $record->author->name)
                    ->sortable(),
                Tables\Columns\TextColumn::make('language')
                    ->searchable(),
                Tables\Columns\TextColumn::make('published_at')
                    ->placeholder("Post is not published")
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->emptyStateIcon('heroicon-o-pencil-square')
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
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }
}
