const input = document.querySelector('#input');
const output = document.querySelector('#output');
const button = document.querySelector('#btn');

const URL = 'https://api.funtranslations.com/translate/minion.json?';

function getTranslation(inputText) {
  return URL + 'text=' + inputText;
}

function handleEvent() {
  const inputText = input.value;
  fetch(getTranslation(inputText))
    .then((res) => res.json())
    .then((val) => {
      output.innerText = val.contents.translated;
      console.log(output.innerText);
    })
    .catch((err) => console.log(err));
}

button.addEventListener('click', handleEvent);
