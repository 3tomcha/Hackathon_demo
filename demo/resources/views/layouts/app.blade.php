<!DOCTYPE html>
<html lang="ja">
<head>
  <link rel="stylesheet" href="/css/app.css">
  <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
  <meta charset="utf-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
</head>
<body>
  <header class="bg-white">
    <div class="navbar navbar-light container mx-auto">
      <a href="/" style="width:80%;"><img src="/img/logo.png"></a>
      <a href="/uploader" style="width:20%;font-size:2rem;color:pink;" class="text-right"><i class="fas fa-pen"></i></a>
    </div>
  </header>


  <main class="py-4">
    @yield('content')
  </main>
</div>
</body>
