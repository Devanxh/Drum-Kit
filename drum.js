var numberDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<numberDrums;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){

  var buttonClicked = this.innerHTML;

  sound(buttonClicked);
  animation(buttonClicked);

  }
);

}

document.addEventListener('keydown',function(event){
    sound(event.key);
    animation(event.key);
});



function sound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "a":
        var tom1 = new Audio("sounds/tom-2.mp3");
        tom1.play();
        break;

        case "s":
          var tom1 = new Audio("sounds/tom-3.mp3");
          tom1.play();
          break;

          case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;

            case "j":
              var tom1 = new Audio("sounds/snare.mp3");
              tom1.play();
              break;

              case "k":
                var tom1 = new Audio("sounds/crash.mp3");
                tom1.play();
                break;

                case "l":
                  var tom1 = new Audio("sounds/tink.wav");
                  tom1.play();
                  break;

                  case "i":
                    var tom1 = new Audio("sounds/clap.wav");
                    tom1.play();
                    break;

                    case "o":
                      var tom1 = new Audio("sounds/openhat.wav");
                      tom1.play();
                      break;



    default: console.log(buttonClicked);
}}

// function animation(currentKey){
//   var activeButton = document.querySelector("."+currentKey);
//   activeButton.classList.add(".pressed");
// }

function animation(currentKey) {

  var active = document.querySelector("." + currentKey);

  active.classList.add("pressed");

  setTimeout(function() {
    active.classList.remove("pressed");
  }, 130);

}
