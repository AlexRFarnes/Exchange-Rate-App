const API_KEY = '12537a488015942cdd4cf7a2';

const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');
const amountOneEl = document.getElementById('amount-one');
const amountTwoEl = document.getElementById('amount-two');
const swapBtn = document.getElementById('rate-btn');
const rateDisplay = document.getElementById('rate');

// Fetch exchange rates and update the DOM
function calculate() {
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;
    const amountOne = +amountOneEl.value;

     fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyOne}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[currencyTwo];
            
            rateDisplay.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

            amountTwoEl.value = (amountOne * rate).toFixed(2);
        }); 
}

function swapCurrency() {
    [currencyElOne.value, currencyElTwo.value] = [currencyElTwo.value, currencyElOne.value];

    // calculate();
}

// calculate();

// Event listeners
currencyElOne.addEventListener('change', calculate);
amountOneEl.addEventListener('input', calculate);
currencyElTwo.addEventListener('change', calculate);
swapBtn.addEventListener('click', swapCurrency);