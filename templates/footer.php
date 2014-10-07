<footer class="content-info" role="contentinfo">
  <div class="container-fluid">
    <?php
    $copy = get_theme_mod( 'copy' );
    echo comicpress_copyright();
    if ($copy) { echo $copy; } else {  echo ' Tutti i diritti riservati'; }
    ?>
  </div>
</footer>
