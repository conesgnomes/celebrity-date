$(function() {
  $("#celeb-quiz").submit(function(event) {
    debugger;
    var fruit = $("input:radio[name=fruit]:checked").val();
    var handed = $("input:radio[name=handed]:checked").val();
    var mornNight = $("input:radio[name=morning-night]:checked").val();

    if ((fruit === "pomegranate" && handed === "left") || mornNight === "night") {
    $("#prince").show();
  } else if ((fruit === "apple" && handed === "right") || mornNight === "morning") {
    $("#gwyneth").show();
  }

  event.preventDefault();
  });
});
