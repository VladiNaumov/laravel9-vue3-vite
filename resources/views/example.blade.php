<!doctype html>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Examples page</title>

    <!-- CSS

    <link href="/public/css/welcome.css" rel="stylesheet">

    -->

</head>

<!-- Menu start -->
@if (Route::has('login'))
    <div class="top-right links">
        @auth
            <a href="{{ route('logout') }}">Log out</a>
        @else
            <a href="{{ route('login') }}">Login</a>

            <a href="{{ route('register-create') }}">Rekisteröinti</a>

        @endauth
    </div>
@endif

<!-- Menu end -->

<body>

<h1>Example controller</h1>

</body>

</html>

<!-- <script src="public/js/main.js"></script>-->
