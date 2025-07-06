const hourHand = document.querySelector('.hour-hand');
const secondHand = document.querySelector('.second-hand');
let counter = 90;

const initialCall = () => {
  //   setHour();
  //   setMinutes();
  setSeconds();
};
const setHour = () => {
  setInterval(() => {
    const d = new Date();
    let hour = d.getHours();
    console.log(d, 'd');
    hourHand.style.transform = 'rotate(360deg)';
    hourHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    console.log('aici');
    console.log(hour);
  }, 1000);
};

const setMinutes = () => {
  const d = new Date();
  let minute = d.getMinutes();
};

const setSeconds = () => {
  setInterval(() => {
    const d = new Date();
    let second = d.getSeconds();
    console.log(second, 'second');
    secondHand.style.transform = 'rotate(360deg)';
    secondHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    console.log('aici');
  }, 1000);
};
// initialCall();
