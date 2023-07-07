<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class ExamplesController extends Controller
{

    public function index()
    {
        return  view('example');
    }


}
