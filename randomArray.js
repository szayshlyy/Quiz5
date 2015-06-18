var messages = ["Good!", "Great!", "Awesome!", "Super!", "Nice!"];

$("#button").on("click", function(){
  var getMessage = function() {
     return messages[Math.floor(Math.random() * messages.length)];
  }
  $("#message").text(getMessage);
});
