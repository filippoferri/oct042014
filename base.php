<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>

  <!--[if lt IE 8]>
    <div class="alert alert-warning">
      <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'roots'); ?>
    </div>
  <![endif]-->
  <div class="animsition-overlay" data-animsition-overlay="true"></div>
    <div class="main-canvas">
    <?php
      do_action('get_header');
      get_template_part('templates/header');
    ?>

    <div id="fullpage">
      <div class="section">
        <div class="inner-section">
          <?php get_template_part('templates/page', 'header'); ?>
        </div>
      </div><!-- /. section -->
      <div class="section wall">
        <div class="wrap container" role="document">
          <div class="content row">
            <main class="main" role="main">
              <?php include roots_template_path(); ?>
            </main><!-- /.main -->
            <?php if (roots_display_sidebar()) : ?>
              <aside class="sidebar" role="complementary">
                <?php include roots_sidebar_path(); ?>
              </aside><!-- /.sidebar -->
            <?php endif; ?>
          </div><!-- /.content -->
  </div><!-- /.wrap -->

        <?php get_template_part('templates/footer'); ?>
</div><!-- /. section -->
    </div><!-- /. fullpage -->

  </div><!-- /. main canvas -->

  <?php wp_footer(); ?>

</body>
</html>
