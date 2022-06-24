
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.footer__pagetop');
  topBtn.hide();

  // ================
  // ボタン
  // ================
  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ================
  // headerの透過切り替え
  // ================

  $(window).on('load',function(){
    // パスの取得
    var path = location.pathname

    if (path == "/index.html"){
      // トップページの場合に実行する内容
      $(window).scroll(function () {

        if ($(this).scrollTop() < 964) {
          // 指定px以下のスクロールでblackを外す
          $(".header").removeClass("black")
        } else {
          // 指定px以上のスクロールでblackを付与
          $(".header").addClass("black")
        }
      });
    }

    if (path == "/blog.html"){
      // ブログの場合に実行する内容
      $(window).scroll(function () {

        if ($(this).scrollTop() < 370) {
          // 指定px以下のスクロールでblackを外す
          $(".header").removeClass("black")
        } else {
          // 指定px以上のスクロールでblackを付与
          $(".header").addClass("black")
        }
      });
    }
  });


  // ================
  // ドロワーメニュー
  // ================
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-hamburger").toggleClass("open");
    $(".js-drawer-menu").toggleClass("open");
    // $("html").toggleClass("is-fixed"); //??

    return false;
  });

  $("#DrawerMenu a[href]").on('click', function(event) {
    $('.js-hamburger').trigger('click');
  });


  // ================
  // swiper
  // ================

  //main-visual
  //js-mv-swiper
  let mySwiper1 = new Swiper ('.js-mv-swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000
  });


  //works
  // js-works-swiper
  let mySwiper2 = new Swiper ('.js-works-swiper', {
    loop: true,
    effect: 'slide',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: '.js-works-pagination',
      type: 'bullets', //ページネーションの種類
      clickable: true, //クリックに反応させる
    }
  });


  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動) ??

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
});

// ================
//mv  画面サイズが変わったときに高さを更新する
// ================
// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });