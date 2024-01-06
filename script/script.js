$(document).ready(function() {
    $('main').on('mousemove', function(e) {
      $('.video-container a').each(function() {
        var moving = $(this).data('set');
        var x = (e.clientX * moving) / 5;
        // var y = (e.clientY * moving) / 100;

        $(this).css('transform', 'translate(-' + x + 'px)');
      });
    });


  });

$(document).ready(function() {
  $('.index-info > .item > a').hover(
    function() {
      $(this).addClass("video-aktif")
      $(this).find("div").css('opacity', '1');
      $(this).find("video").css('display', 'block');
      {if($(this).find("video").get(0).paused)
        $(this).find("video").get(0).play();
      }
    },
    function() {
      $(this).removeClass("video-aktif")
      $(this).find("div").css('opacity', '.5');
      $(this).find("video").css('display', 'none');
      $(this).find("video").get(0).pause();
    }
  );
});

$(document).ready(function() {
  $('.video-container > a').hover(
    function() {
      {if($(this).find("video").get(0).paused)
        $(this).find("video").get(0).play();
      }
    },
    function() {
      $(this).find("video").get(0).load();
    }
  );

  
});

function fnIndex(obj) {
  if (obj === "comm") {
      $(".index-nav > div").removeClass("aktif");
      $(`.${obj}-title`).addClass("aktif");
      $(".index-info").addClass("comm-show");
      $(".index-info").removeClass("prop-show");
  }
  if (obj === "prop") {
      $(".index-nav > div").removeClass("aktif");
      $(`.${obj}-title`).addClass("aktif");
      $(".index-info").addClass("prop-show");
      $(".index-info").removeClass("comm-show");
  }
  if (obj === "all") {
      $(".index-nav > div").removeClass("aktif");
      $(`.${obj}-title`).addClass("aktif");
      $(".index-info").removeClass("prop-show");
      $(".index-info").removeClass("comm-show");
  }
}

$(document).ready(function() {
  if ($(window).width() < 1000) {
    $('.nav').addClass('nav-mobile');
  }
  else {
    $('.nav').removeClass('nav-mobile');
  }
});

function fnSolMenu(divObj) {
  if ($(divObj).css('left') == '0px')
  $(divObj).animate({ 'left': (-1 * $(divObj).outerWidth()) }, 500);
else
  $(divObj).animate({ 'left': '0px' }, 500);
}

