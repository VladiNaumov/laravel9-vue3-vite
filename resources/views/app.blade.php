<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">

    <title>Besttools App</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    @vite(['resources/bootstrap/bootstrap.min.css', 'resources/bootstrap/bootstrap.bundle.min.js'])

    @vite(['resources/js/src/main.js'])

    <!--
    @vite(['resources/sass/app.scss'])
    -->

</head>


<body class="antialiased">

<div id="app"></div>

</body>

