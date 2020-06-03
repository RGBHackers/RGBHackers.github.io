var header = document.getElementById("myHeader");

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});

$(window).on("load", function () {
  document.getElementById("myload").src = "https://raw.githubusercontent.com/RGBHackers/RGBHackers.github.io/master/img/loader.svg?" + Math.random();
  setTimeout(
    function() {
      document.getElementById('loader-wrapper').classList.toggle("fade");
      document.getElementById('loader-wrapper').style.zIndex = "-9999999999"
      document.getElementById('change-overflow').style.overflow = "auto"
    }, 4000);
});
