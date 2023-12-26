$(document).ready(function() {
    $('main').on('mousemove', function(e) {
      $('.video-container a').each(function() {
        var moving = $(this).data('set');
        var x = (e.clientX * moving) / 100;
        var y = (e.clientY * moving) / 100;

        $(this).css('transform', 'translate(' + x + 'px, ' + y + 'px)');
      });
    });


  });

  $(document).ready(function() {
    $('.index-info > div').hover(
      function() {
        $(this).find("div").css('opacity', '1');
        $(this).find("img").css('display', 'block');
      },
      function() {
        $(this).find("div").css('opacity', '.5');
        $(this).find("img").css('display', 'none');
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




