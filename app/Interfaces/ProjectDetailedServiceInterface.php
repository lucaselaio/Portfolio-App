<?php

namespace App\Interfaces;

interface ProjectDetailedServiceInterface
{
    public function fetchProjects();

    public function preparePostData($request);

    public function saveData($request);
}