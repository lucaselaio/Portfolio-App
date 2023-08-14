<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter&family=Outfit:wght@100&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Inter&family=Outfit:wght@400&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Inter&family=Outfit:wght@700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&family=Outfit:wght@100;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap');
        </style>
        <title>Portfolio</title>
    </head>
    <body>
        <div id="app">
            <Navbar></Navbar>
            <div class="container-fluid" style="min-height: 40em;">
                @yield('content')
            </div>
            <Footerbar></Footerbar>
        </div>
        @vite('resources/js/app.js')
    </body>
</html>
<style>
body{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;

    background-size: 100% 100%;
    background-position: 0px 0px;
    background-image: radial-gradient(75% 75% at 50% 50%, #FAF0E5FF 0%, #D7D7DFFF 100%);
}
</style>