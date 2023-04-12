// Determines the number of buttons/keys
var numberOfDrumButtons = document.querySelectorAll('.drum').length;

// Adds Mouse Click Events to all the buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Adds Keyboard Press Events to all the buttons
document.addEventListener('keypress', function (event) {
  //console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Play sounds for corresponding keys
function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

// Handle Button Flashing when corresponding button is clicked/pressed
function buttonAnimation(currentKey) {
  //selecting the corresponding element with .w, .a ...class
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
