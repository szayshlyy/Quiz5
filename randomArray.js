var messages = ["Good!", "Great!", "Awesome!", "Super!", "Nice!"];
function getMessage() {
   return messages[Math.floor(Math.random() * messages.length)];
}
console.log(getMessage());
