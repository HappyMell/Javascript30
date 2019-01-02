const secondHand = document.querySelector('.second-hand');
const bigHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    const hourHand = ((hour / 12) *360) + 90;
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteHands = ((minute / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    bigHand.style.transform = `rotate(${hourHand}deg)`;

    minuteHand.style.transform = `rotate(${minuteHands} deg)`;

}

setInterval(setDate, 1000);