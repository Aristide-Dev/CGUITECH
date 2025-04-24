<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

// Routes pour les services
Route::prefix('services')->name('services.')->group(function () {
    // Page d'index des services
    Route::get('/', function () {
        return Inertia::render('services/index');
    })->name('index');

    // Pages de services individuels
    $services = [
        'it-management', 'cloud', 'it-support', 
        'web-design', 'infrastructure', 'ip-telephony', 'software'
    ];

    foreach ($services as $service) {
        Route::get("/{$service}", function () use ($service) {
            return Inertia::render("services/{$service}");
        })->name($service);
    }
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
