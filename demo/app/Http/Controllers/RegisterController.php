<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function index($sig){
      return \view('register',['sig' => $sig]);
    }

        // public function index(){
        //   return \view('register');
        // }
}
