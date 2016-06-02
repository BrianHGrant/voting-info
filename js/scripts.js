$(document).ready(function() {

$("button#ageButton").click(function() {
  var age = parseInt(prompt("What is your age?"));
  if (age>=18) {
    $("#votingPlaces").show();
  } else {
    $("#votingInfo").show();
  }
 // event.preventDefault();
  });
});
