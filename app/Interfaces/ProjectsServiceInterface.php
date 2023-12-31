<?php

namespace App\Interfaces;

interface ProjectsServiceInterface
{
    public function fetchProjects();

    public function preparePostData($request);

    public function getProjectById($id);
}