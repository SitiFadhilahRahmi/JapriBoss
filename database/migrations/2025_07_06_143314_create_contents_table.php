<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->integer("thumbnail_id")->nullable();
            $table->string("messages");
            $table->string("client_name");
            $table->string("client_occupation");
            $table->integer("avatar_id");
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("slug")->unique();
            $table->string("description")->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string("slug")->unique();
            $table->string("title");
            $table->string("excerpt")->nullable();
            $table->integer("thumbnail_id")->nullable();
            $table->longText("content");
            $table->foreignId("category_id")->constrained('categories');
            $table->foreignId("user_id")->constrained('users');
            $table->string("language");
            $table->date("published_at")->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("slug");
            $table->string("language");
            $table->string("category");
            $table->text("description");
            $table->json("spesification")->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('media_product', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->foreignId('media_id')->constrained('media')->onDelete('cascade');
            $table->integer('order');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('blog');
        Schema::dropIfExists('products');
    }
};
