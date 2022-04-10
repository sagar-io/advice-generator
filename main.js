const advice_box = document.getElementById('main-advice');
const dice = document.getElementById('dice');

const advice_id = document.getElementById('advice-id');
let quote, num;

updateQuote();

function updateQuote() {
  fetch('https://api.adviceslip.com/advice')
    .then(response =>
      response.json())
    .then(data => {
    quote = `${data.slip.advice}`;
    num = `${data.slip.id}`;
    advice_box.innerText = `"${quote}"`;
    advice_id.innerText = `ADVICE #${num}`;
});
}

dice.addEventListener('click', updateQuote);







