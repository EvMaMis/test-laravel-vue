<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Zoho form</title>
        @vite(['resources/sass/app.scss','resources/js/app.js'])
    </head>
    <body id="app">
        <app></app>
    </body>
</html>
