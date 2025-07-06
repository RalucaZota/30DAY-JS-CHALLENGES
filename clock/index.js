const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const updateClock = () => {
  const d = new Date();

  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();

  const hourWinkle = ((hour % 12) * 30 + minute * 0.5) + 90;
  const minuteWinkle = (minute * 6) + 90;
  const secondWinkle = (second * 6) + 90;

  hourHand.style.transform = `rotate(${hourWinkle}deg)`;
  minuteHand.style.transform = `rotate(${minuteWinkle}deg)`;
  secondHand.style.transform = `rotate(${secondWinkle}deg)`;
};

setInterval(updateClock, 1000);
