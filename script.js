 $(function(){
    /* ハンバーガーメニュー */
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        $('#nav').fadeToggle('500');
    });
    $(".closebtn").click(function () {
        $(".openbtn").toggleClass('active');
        $('#nav').fadeToggle('500');
    });


    /* メイン画像切り替え */
    $(function(){
        $(".mv li:not(:first-child)").hide();
        setInterval(function() {
          $(".mv li:first-child").fadeOut("slow").next("li").fadeIn("slow").end().appendTo(".mv");
        },5000);
      });
    
    /* 理由スライドイン */
    var fadeIn = $('.fade-in');
    $(window).scroll(function () {
      $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 150) {
          $(this).addClass("scroll-in");
        }
      });
    });
    /* 受験生の声ズームイン */
    var student = $('.student');
    $(window).scroll(function () {
      $(student).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 150) {
          $(this).addClass("zoomin");
        }
      });
    });
});