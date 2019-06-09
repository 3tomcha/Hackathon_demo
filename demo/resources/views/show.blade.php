@extends('layouts/app')
@section('content')
<body class="bg-white show">
  <h2 class="p-2">ROOM</h1>
    <div class="container text-center">
      <div id="show1" class="mb-5">つきあって30日だよ</div>
      <div class="row justify-content-between mb-5">
        <div class="card col-6">
          <img src="img/test.jpg" class="w-100">
          <div class="card-title">上村莉奈</div>
          <i class="fas fa-heart text-center"></i>
        </div>
        <div class="card col-6">
          <img src="img/test.jpg" class="w-100">
          <div class="card-title">上村莉奈</div>
        </div>
      </div>
      <div class="w-100 mt-5">
          <div id="show2" class="mb-5">二人が初めてつきあった日は<br>3月12日</div>
      </div>
      <div class="qr">
      <p>みんなにシェア！</p>
      <i class="fas fa-arrow-down"></i>
    </div>
      <img src="img/qr.jpg" class="w-100">
    </div>
  </body>
  <script src="/js/Show.js" desc></script>
  </html>
  @endsection
