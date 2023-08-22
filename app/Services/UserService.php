<?php

namespace App\Services;

use App\Interfaces\UserServiceInterface;
use App\Models\User;
use Carbon\Carbon;

class UserService implements UserServiceInterface
{

    public function createUser($request)
    {
        return User::create($this->preparePostData($request));
    }

    public function findByEmail($email)
    {
        return User::where('email', $email)->first();
    }

    private function preparePostData($request)
    {
        return [
            'name' => (string) $request->name,
            'email' => $request->email ?? null,
            'password' => $request->password ?? null,
        ] ?? [];
    }
}