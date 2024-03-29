<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Weather Application</title>
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  <link rel="stylesheet"  type="text/css" href="style.css">
  
</head>

<body>

  <div class="container">
  <header class="header">
    <div class="search">
      <input type="text" placeholder="Enter City Name" id="search-txt">
      <a id="search-btn" href="#"><i class="fas fa-search"></i></a>
    </div>
  </header>

  <main id="main">
    
    <div class="city-icon">
      <div class="city-icon-holder">
      <div id="city-name"></div>
      <img src="" alt="" id="icon">
        </div>
    </div>
    
    <div class="temperature">
      <div id="temp"></div>
    </div>
    
    <div class="humidity">
      <div id="humidity-div"></div>
    </div>
    
  </main>
  
</div>
 

  

    <script  src="index.js"></script>



</body>

</html>
