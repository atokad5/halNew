<?php
$root = get_template_directory_uri();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php wp_title(''); ?></title>
  <link rel="stylesheet" href="<?php echo "$root/assets/css/style.css" ;?>">
  <script src="<?php echo "$root/assets/js/jquery.js";?>"></script>
 	<?php wp_head();?>
</head>
<body <?php body_class(); ?>>


<nav class="the-navbar">
	<div class="the-top-nav">
    <div class="inner">

  		<h5 class="site-title" style="padding: 0; margin: 0; line-height: 0.5;">Hal.io</h5>

		  <button class="nav-trigger">
        <span class="top-mnt"></span>
        <span class="mid-mnt"></span>
        <span class="btm-mnt"></span>
  	  </button>

      <div class="the-desktop-mn">
        <ul class="the-d-m">
          <li><a href="#" class="<?php if(site_url('home')){
            echo 'is-current-page';
          }?>">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Learn More</a></li>
          <li><a href="#">Find Out</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div class="clear-block"></div>
    </div>

    <div class="clear-block"></div>
  </div>
  


  <div class="the-menu">
    <div class="inner">

      <ul class="menu-li">
        <li class="menu-item"><a href="#">About</a></li>
        <li class="menu-item"><a href="#">Learn More</a></li>
        <li class="menu-item"><a href="#">FAQ</a></li>
        <li class="menu-item"><a href="#">Contact</a></li>
      </ul>
    </div>

    <div class="line-draw"></div>
    <div class="the-nav-bg"></div>
  </div>
</nav>
