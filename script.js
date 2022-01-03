$(document).ready(function () {
  $(".loader-container").fadeOut();
  $("body").removeClass("no-scroll")
  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.querySelector(".navbar-wrapper");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  window.addEventListener("scroll", (e) => {
    var el = document.getElementById("jsScroll");
    if (window.scrollY > 200) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
  $("#jsScroll").click(function () {
    window.scrollTo({
      top: 0,
    });
  })
  $("#search-icon").click(function () {
    $(".mobile-search").toggleClass("active");
  })
  $(".overlay .fa-heart").each(function () {
    if ($(this).hasClass("fav")) {
      $(this).removeClass("far");
      $(this).addClass("fas");
    }
  });
  $(".overlay .fa-heart")
    .mouseenter(function () {
      if ($(this).hasClass("far")) {
        $(this).removeClass("far");
        $(this).addClass("fas");
      }
    })
    .mouseleave(function () {
      $(this).not(".fav").removeClass("fas");
      $(this).not(".fav").addClass("far");
    });
  $(".overlay .fa-heart").click(function () {
    $(this).addClass("fav");
    // const audio = new Audio("woosh.mp3");
    // audio.play();
  });
});
