// import functions and grab DOM elements
const catImage = document.getElementById('cat');
const dogImage = document.getElementById('dog');
const horseImage = document.getElementById('horse');
const catSound = document.getElementById('cat-sound');
const dogSound = document.getElementById('dog-sound');
const horseSound = document.getElementById('horse-sound');
// initialize global state

// set event listeners 
catImage.addEventListener('click', ()=> {
  catSound.play();
});

dogImage.addEventListener('click', ()=> {
  dogSound.play();
});

horseImage.addEventListener('click', ()=> {
  horseSound.play();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    catSound.play();}

    if (event.key === 'd') {
      dogSound.play();}

      if (event.key === 'h') {
        horseSound.play();}
  });

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
