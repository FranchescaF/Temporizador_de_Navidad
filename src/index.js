const monthsElement = document.querySelector("#months");
const weeksElement = document.querySelector("#weeks");
const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const today = new Date(); //Fecha y Hora Actual
let christmasYear = today.getFullYear();

if (today.getMonth() === 11 && today.getDate() > 25) {
  christmasYear += 1; //los meses en JavaScript van de 0 a 11
}

const christmasDate = new Date(christmasYear, 11, 25);

function updateCountdown() {
  const now = new Date();
  const timeDifference = christmasDate - now; //almacena la diferencia en milisegundos entre la fecha de Navidad y la fecha actual.

  const daysMilliseconds = 1000 * 60 * 60 * 24;
  const hoursMilliseconds = 1000 * 60 * 60;
  const minutesMilliseconds = 1000 * 60;
  const secondsMilliseconds = 1000;

  const remainingDays = Math.floor(timeDifference / daysMilliseconds);
  const remainingHours = Math.floor(
    (timeDifference % daysMilliseconds) / hoursMilliseconds
  );
  const remainingMinutes = Math.floor(
    (timeDifference % hoursMilliseconds) / minutesMilliseconds
  );
  const remainingSeconds = Math.floor(
    (timeDifference % minutesMilliseconds) / secondsMilliseconds
  );

  const monthsValue = Math.floor(remainingDays / 30);
  const weeksValue = Math.floor((remainingDays % 30) / 7);
  const daysValue = remainingDays % 7;

  monthsElement.textContent = monthsValue;
  weeksElement.textContent = weeksValue;
  daysElement.textContent = daysValue;
  hoursElement.textContent = remainingHours;
  minutesElement.textContent = remainingMinutes;
  secondsElement.textContent = remainingSeconds;
}

function showChristmasAlert() {
  christmasAlert.style.display = "block";
}

setInterval(updateCountdown, 1000);
updateCountdown();
