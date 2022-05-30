<?php

use Illuminate\Database\Seeder;
use musicapprentice\User;
use musicapprentice\Exercice;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User(); 
        $user->name = "Marta";
     	$user->email = "mail@mail.com";
        $user->bio = "hahah";
        $user->avatar= "avatar_url";
     	$user->password = "heljames";
     	$user->save(); 
    }
}
