@extends('master')

@section('content')
<form method="POST" action="{{ route('projects.store') }}" name="project_form">
    @csrf
    <div class="mb-3">
        <label for="project_name" class="form-label">Project name</label>
        <input required name="project_name" type="text" class="form-control" id="project_name" placeholder="Project name">
    </div>
    <div class="mb-3">
        <label for="date_from" class="form-label">From</label>
        <input required name="date_from" type="month" class="form-control" id="date_from" placeholder="From">
    </div>
    <div class="mb-3">
        <label for="date_to" class="form-label">To</label>
        <input name="date_to" type="month" class="form-control" id="date_to" placeholder="To">
    </div>
    <div class="mb-3">
        <label for="about" class="form-label">About</label>
        <textarea required name="about" class="form-control" id="about" placeholder="About"></textarea>
    </div>
    
    <div class="checkbox-block">
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="git" id="chk-git">
            <label class="form-check-label" for="chk-git">
                Git
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="javascript" id="chk-javascript">
            <label class="form-check-label" for="chk-javascript">
                Javascript
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="vue" id="chk-vue">
            <label class="form-check-label" for="chk-vue">
                Vue.js
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="jquery" id="chk-jquery">
            <label class="form-check-label" for="chk-jquery">
                JQuery
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="php" id="chk-php">
            <label class="form-check-label" for="chk-php">
                PHP
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="laravel" id="chk-laravel">
            <label class="form-check-label" for="chk-laravel">
                Laravel
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="zendframework" id="chk-zendframework">
            <label class="form-check-label" for="chk-zendframework">
                ZendFramework
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="cakephp" id="chk-cakephp">
            <label class="form-check-label" for="chk-cakephp">
                CakePHP
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="redis" id="chk-redis">
            <label class="form-check-label" for="chk-redis">
                Redis
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="mysql" id="chk-mysql">
            <label class="form-check-label" for="chk-mysql">
                MySQL
            </label>
        </div>
        <div class="form-check">
            <input  name="technologies[]"class="form-check-input" type="checkbox" value="html5" id="chk-html5">
            <label class="form-check-label" for="chk-html5">
                HTML
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="css" id="chk-css">
            <label class="form-check-label" for="chk-css">
                CSS
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="phpunit" id="chk-phpunit">
            <label class="form-check-label" for="chk-phpunit">
                PHPUnit
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="jest" id="chk-jest">
            <label class="form-check-label" for="chk-jest">
                Jest
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="jira" id="chk-jira">
            <label class="form-check-label" for="chk-jira">
                Jira
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="docker" id="chk-docker">
            <label class="form-check-label" for="chk-docker">
                Docker
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="bitbucket" id="chk-bitbucket">
            <label class="form-check-label" for="chk-bitbucket">
                Bitbucket
            </label>
        </div>
        <div class="form-check">
            <input name="technologies[]" class="form-check-input" type="checkbox" value="gitlab" id="chk-gitlab">
            <label class="form-check-label" for="chk-gitlab">
                Gitlab
            </label>
        </div>
    </div>
    <button type="submit">
        Submit
    </button>
</form>
@endsection