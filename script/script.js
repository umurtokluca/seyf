// $(document).ready(function() {
//     $('.video-main').on('mousemove', function(e) {
//       $('.video-main .video-container a').each(function() {
//         var moving = $(this).data('set');
//         var x = (e.clientX * moving) / 5;
//         // var y = (e.clientY * moving) / 100;

//         $(this).css('transform', 'translate(-' + x + 'px)');
//       });
//     });

//     $('.video-main2').on('mousemove', function(e) {
//       $('.video-main2 .video-container a').each(function() {
//         var moving = $(this).data('set');
//         var x = (e.clientX * moving) / 5;
//         // var y = (e.clientY * moving) / 100;

//         $(this).css('transform', 'translate(-' + x + 'px)');
//       });
//     });
//   });

$(document).ready(function() {
  for (i = 0; i < 5; i++) {
    $("#owl-slide" + i).owlCarousel({
      loop: false,
      margin: 30,
      smartSpeed: 700,
      nav: true,
      navText: [' ',' '],
      items: 1
    });
  }
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
  $('.video-container .item > a').hover(
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
  if ($(window).width() > 1000) {
    if (obj === "comm") {
      $(".index-nav > div").removeClass("aktif");
      $(`.${obj}-title`).addClass("aktif");
      $(".index-info").addClass("comm-show");
      $(".index-info").removeClass("tv-show");
      $(".index-info").removeClass("movie-show");
    }
    if (obj === "tv") {
        $(".index-nav > div").removeClass("aktif");
        $(`.${obj}-title`).addClass("aktif");
        $(".index-info").addClass("tv-show");
        $(".index-info").removeClass("comm-show");
        $(".index-info").removeClass("movie-show");
    }
    if (obj === "movie") {
      $(".index-nav > div").removeClass("aktif");
      $(`.${obj}-title`).addClass("aktif");
      $(".index-info").addClass("movie-show");
      $(".index-info").removeClass("comm-show");
      $(".index-info").removeClass("tv-show");
  }
    if (obj === "all") {
        $(".index-nav > div").removeClass("aktif");
        $(`.${obj}-title`).addClass("aktif");
        $(".index-info").removeClass("tv-show");
        $(".index-info").removeClass("comm-show");
        $(".index-info").removeClass("movie-show");
    }
  }
  else {
    var test = $(`.${obj}-mobile`).addClass('show-mobile')
    $(".index-nav > div").removeClass("aktif");
    $(".index-container-mobile > div").removeClass("show-mobile");
    $(`.${obj}-title`).addClass("aktif");
    setTimeout(test, 500);
    
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
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});

$(document).ready(function() {
  var owl = $('.video-container');
  owl.owlCarousel({
    // loop: true,
    nav: false,
    dots: false,
    // slideBy: 2,
    margin: 124,
    
    responsive: {
      0: {
        autoWidth: true,
        margin: 0,
        items: 1
      },
      1000: {

      }
    }
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY < 0) {
        $(this).trigger('next.owl');
    } else {
        $(this).trigger('prev.owl');
    }
    e.preventDefault();
  });
})
