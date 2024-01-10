$(document).ready(function() {
    $('.video-main').on('mousemove', function(e) {
      $('.video-main .video-container a').each(function() {
        var moving = $(this).data('set');
        var x = (e.clientX * moving) / 5;
        // var y = (e.clientY * moving) / 100;

        $(this).css('transform', 'translate(-' + x + 'px)');
      });
    });

    $('.video-main2').on('mousemove', function(e) {
      $('.video-main2 .video-container a').each(function() {
        var moving = $(this).data('set');
        var x = (e.clientX * moving) / 5;
        // var y = (e.clientY * moving) / 100;

        $(this).css('transform', 'translate(-' + x + 'px)');
      });
    });


  });

$(document).ready(function() {
  $('.index-info > a').hover(
    function() {
      $('.index-info > a').removeClass("video-aktif")
      $(this).addClass("video-aktif")
      if ($(".video-aktif")[0]){
        $(this).find("video").get(0).play();
      }
    },
    function() {
      $(this).removeClass("video-aktif")
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

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});