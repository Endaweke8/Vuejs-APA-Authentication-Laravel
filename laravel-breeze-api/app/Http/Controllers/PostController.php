<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
   public function store(Request $request){
   
    $post = \App\Models\Post::create([
        'title' => $request->title,
        'description' => $request->description,
        
    ]);
   }
}
