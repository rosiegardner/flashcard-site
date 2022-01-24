$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#js-showing").toggle();
    $("#js-hidden").toggle();
  });

  $(".clickable2").click(function() {
    $("#operators-showing").toggle();
    $("#operators-hidden").toggle();
  });

  $(".clickable3").click(function() {
    $("#variables-showing").toggle();
    $("#variables-hidden").toggle();
  });

  $(".clickable4").click(function() {
    $("#functions-showing").toggle();
    $("#functions-hidden").toggle();
  });

  $(".clickable5").click(function() {
    $("#method-showing").toggle();
    $("#method-hidden").toggle();
  });

});