<?php

namespace App\Interfaces;

interface UserServiceInterface
{
    public function createUser($request);
    public function findByEmail($email);
}