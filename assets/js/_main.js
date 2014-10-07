/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      // JavaScript to be fired on all page

        $(document).ready(function() {

          //Animation page
          $(".animsition-overlay").animsition({

            inClass               :   'overlay-slide-in-right',
            outClass              :   'overlay-slide-out-right',
            inDuration            :    3000,
            outDuration           :    800,
            linkElement           :   '.main-menu a',
            // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
            touchSupport          :    true,
            loading               :    true,
            loadingParentElement  :   'body', //animsition wrapper element
            loadingClass          :   'animsition-loading',
            unSupportCss          : [ 'animation-duration',
                                      '-webkit-animation-duration',
                                      '-o-animation-duration'
                                    ],
            //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

            overlay               :   true,

            overlayClass          :   'animsition-overlay-slide',
            overlayParentElement  :   'body'
          });

          //Off Canvas
          $(function() {
              $('.menuOpen').on('click', function() {
                $('.main-canvas').toggleClass('isOpen');
                if ($('.main-canvas').hasClass('isOpen')) {
                  //$('.wrap, footer').foggy();
                  $('.off-canvas').css('right', '-200px');
                } else {
                  //$('.wrap, footer').foggy(false);
                  $('.off-canvas').css('right', '-400px');
                }
              });
            });

          //Full page slide
          $('#fullpage').fullpage({
            verticalCentered: true,
            scrollOverflow: true,
            resize: false,
            sectionsColor : ['#FFFFFF', '#ecf0f1'],
          });

          //bg gradient
          $(function() {
            rollBg();
            setInterval(rollBg, 10000);
          });

        }); // End Document Ready


    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
    }
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
