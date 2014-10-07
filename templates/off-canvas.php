<div class="off-canvas">
  <nav class="" role="navigation">
  <span class="menuOpen"><span class="fi fi-cross"></span></span>
  <?php
    if (has_nav_menu('primary_navigation')) :
      wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'main-menu'));
    endif;
  ?>
  </nav>
</div>
