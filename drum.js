var numberOfDrumButtons = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    // console.log(buttonInnerHTML);
    makeSound(buttonInnerHTML);
  });

}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});


function makeSound(key) {
  switch (key) {
    case "W":
      var tom1 = new Audio("background/tom-1.mp3");
      tom1.play();
      break;

    case "A":
      var tom2 = new Audio("background/tom-2.mp3");
      tom2.play();
      break;

    case "S":
      var tom3 = new Audio('background/tom-3.mp3');
      tom3.play();
      break;

    case "D":
      var tom4 = new Audio('background/tom-4.mp3');
      tom4.play();
      break;

    case "J":
      var snare = new Audio('background/snare.mp3');
      snare.play();
      break;

    case "K":
      var crash = new Audio('background/crash.mp3');
      crash.play();
      break;

    case "L":
      var kick = new Audio('background/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);
  }
}

console.log('- made by Gaurav Sharma');