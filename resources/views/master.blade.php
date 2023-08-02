<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Portfolio</title>
</head>
<body>
    <script src="{{ mix('js/app.js') }}"></script>
    <div id="app">
        @yield('content')
        @vite('resources/js/app.js')
    </div>
</body>
</html>