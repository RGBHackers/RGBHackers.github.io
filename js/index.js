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
  var opacity = 0;
  var opacity2 = 1;
  var speed = 0.05;
  setTimeout(setup, 4000);
  function setup () {
    //document.getElementById('loader-wrapper').classList.toggle("fade");
    //document.getElementById('loader-wrapper').style.opacity = 0.9
    //document.getElementById('change-overflow').style.overflow = "auto"
    incOpacity2()
  }
  function incOpacity () {
    opacity += speed;
    document.getElementById('change-overflow').style.opacity = opacity;
    if (opacity < 1) {
      setTimeout(incOpacity,100)
    }
  }
  function incOpacity2 () {
    opacity2 = opacity2 - speed;
    if (opacity2 >= 0) {
      console.log(opacity2)
      document.getElementById('loader-wrapper').style.opacity = opacity2
      setTimeout(incOpacity2,30)
    }
    else {
      document.getElementById('loader-wrapper').style.zIndex = "-9999999999"
      document.getElementById('change-overflow').style.overflow = "auto"
      document.getElementById('loader-wrapper').style.opacity = 0
    }
  }
});
