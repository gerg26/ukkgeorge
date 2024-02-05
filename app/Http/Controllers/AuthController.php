<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function signIn() {
        return Inertia::render('LoginPage');
    }

    public function signUp() {
        return Inertia::render('RegisterPage');
    }
}