const button = document.getElementById('btn-kick');
const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
}

button.addEventListener('click', function () {
  console.log('kick');
  changeHP(random(20), character);
  changeHP(random(20), enemy);
});

function random(num) {
  return Math.ceil(Math.random() * num);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + '%';
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0
    console.log('персонаж проиграл');
    button.disabled = true;

  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function init() {
  console.log('Start Game!');
  renderHP(character);
  renderHP(enemy);
}

init();