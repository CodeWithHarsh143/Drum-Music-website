function PlaySound(sound_name){
  let audio = new Audio(`sounds/${sound_name}.mp3`);
  audio.play();
}

// detecting clicks
const buttons = document.querySelectorAll('.drum');
for(let i =0; i<buttons.length;i++){
buttons[i].addEventListener('click' , function(){
  let button_tag = this.innerHTML;
  makeSound(button_tag);
});
buttons[i].addEventListener('keypress' , function (event) { // event is the javascript object which hsve key value pair sbout event details
    let key = event.key;
    makeSound(key);
});
}


function makeSound(button_tag){
  switch (button_tag) {
    case "w":
      PlaySound('tom-1');
      break;
    case "a":
      PlaySound('tom-2');
      break;
    case "s":
      PlaySound('tom-3');
      break;
    case "d":
      PlaySound('tom-4');
      break;
    case "j":
      PlaySound('snare');
      break;
    case "k":
      PlaySound('kick-bass');
      break;
    case "l":
      PlaySound('crash');
      break;
  }
  // after making sound add this animation
  buttonAnimation(button_tag);
}

function buttonAnimation(currentKey) {
  let active_button = document.querySelector("."+currentKey).classList;
  // adding style class
  active_button.add('pressed');
  // how much time to be pressed
  setTimeout(() => {
    active_button.remove('pressed'); // 100 milisecond ke baad ye function execude karo
  }, 100);
}
