var stickyHeaders = (function() {

    var $window = $(window),
        $stickies;

    var load = function(stickies) {

        if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

            $stickies = stickies.each(function() {

                var $thisSticky = $(this).wrap('<div class="followWrap" />');

                $thisSticky
                    .data('originalPosition', $thisSticky.offset().top)
                    .data('originalHeight', $thisSticky.outerHeight())
                    .parent()
                    .height($thisSticky.outerHeight());
            });

            $window.off("scroll.stickies").on("scroll.stickies", function() {
                _whenScrolling();
            });
        }
    };

    var _saveCurrentPosition = function() {

        if($stickies) {
            $stickies.each(function () {

                var $thisSticky = $(this);

                if(!$thisSticky.hasClass('fixed')){
                    $thisSticky
                        .data('originalPosition', $thisSticky.offset().top)
                        .data('originalHeight', $thisSticky.outerHeight())
                        .parent()
                        .height($thisSticky.outerHeight());

                }

            });
        }

    }

    var _whenScrolling = function() {
        if ($window.width() > 1023) {
          $stickies.each(function(i) {

              var $thisSticky = $(this),
                  $stickyPosition = $thisSticky.data('originalPosition');

              if ($stickyPosition <= $window.scrollTop() + 100) {

                  var $nextSticky = $stickies.eq(i + 1),
                      $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

                  $thisSticky.addClass("fixed");

                  if ($nextSticky.length > 0 && $thisSticky.offset().top >= ($nextStickyPosition)) {

                      $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
                  }

              } else {

                  var $prevSticky = $stickies.eq(i - 1);

                  $thisSticky.removeClass("fixed");

                  if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight') + 140) {

                      $prevSticky.removeClass("absolute").removeAttr("style");
                  }
              }

          });
        } else {
          if ($window.scrollTop() > 1000) {
            $('.arrow').removeClass('hidden');
          } else {
            $('.arrow').addClass('hidden');
          }
        }
    };

    return {
        load: load,
        saveCurrentPosition: _saveCurrentPosition
    };
})();

$(function() {

    if($(window).width() > 1023) {
        $("body").click(function () {
            stickyHeaders.saveCurrentPosition()
        });
    }
});
