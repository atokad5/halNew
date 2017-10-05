 <?php

 $root = get_template_directory_uri();
 ?>

 <section class="the-subscription">
   <div class="inner">
        <span>Sign Up for Newsletters</span>
        <form action="" class="subscriber">
          <div class="input">
            <input type="email" placeholder="Email Address">
          </div>
          <div class="input">
            <input type="submit" value="Subscribe">
          </div>
          <div class="clear-block"></div>
        </form>
        <span class="spam">Don't worry, we hate spam too.</span>
   </div>
 </section>

 <footer>
   <div class="inner">
      <figure class="footer-logo">
        <img src="<?php echo "$root/assets/img/logo.png";?>" alt="">
      </figure>
       Hal.io
       <div style="padding: 0.4em 0em;">&copy; <small> <?php echo date('Y'); ?>  All Rights Reserved </small></div>

    </div>
 </footer>




 <div class="the-modal">
   <div class="inner" style="position: relative;">
      <div class="prevent-overflow">
        <div class="is-showing-form">
          <div class="contact-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias distinctio aspernatur veniam illum, animi odio tempora maxime praesentium fuga nesciunt tenetur voluptate aliquid eveniet inventore error iusto accusamus ipsa, quis doloremque soluta? Nihil, ipsam? Iusto libero rem reprehenderit. Dicta, porro!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias distinctio aspernatur veniam illum, animi odio tempora maxime praesentium fuga nesciunt tenetur voluptate aliquid eveniet inventore error iusto accusamus ipsa, quis doloremque soluta? Nihil, ipsam? Iusto libero rem reprehenderit. Dicta, porro!</p>
              
          </div>
          </div>
        </div>

    </div>
 </div>


 <script src="<?php echo "$root/assets/js/global.js";?>"></script>

 <?php wp_footer(); ?>
</body>
</html>
