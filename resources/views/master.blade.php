<!DOCTYPE html>
<html lang="en" class="m-0 p-0">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link sizes="96x96" rel="icon" href="/favicon.ico" type="image/x-icon">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">

        <link id="theme-link" rel="stylesheet" href="/themes/my-theme-light/theme.css">
        {{-- <script src="../../node_modules/tinymce/tinymce.min.js" referrerpolicy="origin"></script> --}}
        <script src="https://cdn.tiny.cloud/1/zdok0vt8ar6pu5ozg2pl2fzc7z8fxgxoqe6hx7qsnlbvn98r/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter&family=Outfit:wght@100&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Inter&family=Outfit:wght@400&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Inter&family=Outfit:wght@700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&family=Outfit:wght@100;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap');
        </style>
        <title>Lucas Azevedo | Portfolio</title>
    </head>
    <body id=bodyApp>
        <div id="app">
            <main-component>
                @yield('content')
            </main-component>
        </div>
        @vite('resources/js/app.js')
    </body>
</html>