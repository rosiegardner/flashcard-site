$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#js-showing").toggle();
    $("#js-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#operators-showing").toggle();
    $("#operators-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable3").click(function() {
    $("#variables-showing").toggle();
    $("#variables-hidden").toggle();
  });
});