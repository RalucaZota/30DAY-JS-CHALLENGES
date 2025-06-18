const handleSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const keyDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (audio && keyDiv) {
    audio.play();
    keyDiv.classList.add('playing');
  } 
  return
};

const removePlayingClass = (event) => {
  const keyDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (keyDiv) {
    keyDiv.classList.remove('playing');
  }
};
document.addEventListener('keydown', handleSound);
document.addEventListener('keyup', removePlayingClass);
