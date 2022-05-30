<?php

use Illuminate\Database\Seeder;
use musicapprentice\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $c1 = new Category(); 
        $c1->name = "Luallaby";
        $c1->description = "For Luallaby ";
        $c1->save(); 

        $c2 = new Category(); 
        $c2->name = "Relaxation Music";
        $c2->description = "For Relaxing music";
        $c2->save(); 

        $c3 = new Category(); 
        $c3->name = "Story telling";
        $c3->description = "For Story Telling";
        $c3->save(); 

        $c4 = new Category(); 
        $c4->name = "Song";
        $c4->description = "Music for everyone";
        $c4->save(); 

       

    }
}
