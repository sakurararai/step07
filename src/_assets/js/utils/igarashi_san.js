import "nadia-lib_n_utility/dist/_assets/js/n_utility";

export default () => {
  //-- smooth scroll --//
  $("a[href^='#']").on("click", function () {
    let speed = 300;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - 120;
    $("body,html").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  //-- drawer menu --//
  $("#hamburger").on("click", function () {
    $("#gnav").toggleClass("nav-active");
    $("#hamburger").toggleClass("bar-active");

    $("#gnav,a[href]").on("click", function (event) {
      $("#hamburger").trigger("click");
    });
  });

  //-- swiper --//
  let mySwiper = new Swiper(".swiper-container", {
    loop: true, //最後に達したら先頭に戻る

    //ページネーション表示の設定
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
  });
};
