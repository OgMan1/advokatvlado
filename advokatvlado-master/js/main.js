$(document).ready(function () {
  $(window).scroll(function () {
    // check if scroll event happened
    if ($(document).scrollTop() >= 10) {
      $(".navbar").css({
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderBottom: "1px solid black",
      });
      $(".navbar-collapse").css({
        backgroundColor: "transparent",
      });
    }
  });

  function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(51.508742, -0.12085),
      zoom: 5,
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
  }
});
