<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
// Route::get('/', function () {
//     return view('welcome');
// });


Route::get('/', function () {
    return view('index');
});

Route::get('/match', function () {
    return view('show');
});

Route::get('/uploader', function () {
    return view('uploader');
});

Route::get('/cupplelist', function () {
    return view('cupplelist');
});

Route::get('/register/{sig}', 'RegisterController@index');
// Route::resource('photos', 'PhotoController');
