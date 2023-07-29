import '../css/common.css';

const cars = [
  'Ferrari',
  'Mercedes-AMG Petronas Motorsport ',
  'Red Bull Racing',
  'McLaren-Mercedes ',
  'Williams Racing ',
];

let raceCounter = 0;

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = cars.map(run);
  updateWinnerField('');
  updateProgressField('🏎 Заїзд розпочався, ставки не приймаються!');
  winner(promises);
  waitForAll(promises);
}

// визначаємо переможця

function winner(carsP) {
  Promise.race(carsP).then(({ car, time }) => {
    updateWinnerField(`🎉 Переміг ${car}, фінішував за ${time}`);
    updateResultsTable({ car, time, raceCounter });
  });
}

function waitForAll(carsP) {
  Promise.all(carsP).then(() => {
    updateProgressField('🗒 заїзд завершено, приймаються ставки');
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ car, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${car}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run(car) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ car, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
