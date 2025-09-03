const convertButton = document.querySelector(".convert-button");
const fromCurrencySelect = document.querySelector(".from-currency");
const toCurrencySelect = document.querySelector(".currency-select");

function convertValue() { 
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value.replace(",", ".").replace(/[^\d.-]/g, "")) || 0
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor de origem
    const currencyValueConverted = document.querySelector(".currency-value"); // valor convertido


    const rates = {
        real: 1,
        dolar: 5.57,
        euro: 6.54,
        libra: 7.53,
        bitcoin: 664.547
    };

    const from = fromCurrencySelect.value;
    const to = toCurrencySelect.value;
    const convertedValue = inputCurrencyValue * (rates[from] / rates[to]);

    const locales = {
        real: "pt-BR",
        dolar: "en-US",
        euro: "de-DE",
        libra: "en-GB",
        bitcoin: "en-US"
    };

    const currencies = {
        real: "BRL",
        dolar: "USD",
        euro: "EUR",
        libra: "GBP",
        bitcoin: "BTC"
    };

    currencyValueToConvert.innerHTML = new Intl.NumberFormat(locales[from], {
        style: "currency",
        currency: currencies[from]
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat(locales[to], {
        style: "currency",
        currency: currencies[to]
    }).format(convertedValue);

    }


function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    const currencyData = {
        dolar: { name: "Dólar americano", img: "./assets/dolar.png" },
        euro: { name: "Euro", img: "./assets/euro.png" },
        libra: { name: "Libra", img: "./assets/libra.png" },
        bitcoin: { name: "Bitcoin", img: "./assets/bitcoin.png" },
        real: { name: "Real", img: "./assets/real.png" }
    };

    const to = toCurrencySelect.value;

    currencyName.innerHTML = currencyData[to].name;
    currencyImg.src = currencyData[to].img;

    convertValue();
}

function changeFromCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const fromCurrencyName = document.getElementById("currency-name-from");
    const fromCurrencyImg = document.querySelector(".currency-img-from");

    const currencyData = {
        dolar: { name: "Dólar americano", img: "./assets/dolar.png" },
        euro: { name: "Euro", img: "./assets/euro.png" },
        libra: { name: "Libra", img: "./assets/libra.png" },
        bitcoin: { name: "Bitcoin", img: "./assets/bitcoin.png" },
        real: { name: "Real", img: "./assets/real.png" }
    };

    fromCurrencyName.innerHTML = currencyData[fromCurrency].name;
    fromCurrencyImg.src = currencyData[fromCurrency].img;

    convertValue();
    }


fromCurrencySelect.addEventListener("change", changeFromCurrency);
toCurrencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);