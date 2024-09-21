async function convertCurrency() {
    const currency = document.getElementById('currency').value;
    const amount = document.getElementById('amount').value;
    const percentage = document.getElementById('percentage').value;

    if (amount === "" || isNaN(amount) || percentage === "" || isNaN(percentage)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        document.getElementById('earnings').innerText = "";
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
        const data = await response.json();
        const rate = data.rates.INR;
        const result = amount * rate;
        const commission = result * (percentage / 100);
        const earnings = result - commission;

        document.getElementById('result').innerText = `${amount} ${currency} = ₹${result.toFixed(2)} INR`;
        document.getElementById('earnings').innerText = `Earnings after ${percentage}% Commission: ₹${earnings.toFixed(2)} INR`;
    } catch (error) {
        document.getElementById('result').innerText = "Error fetching exchange rate. Please try again.";
        document.getElementById('earnings').innerText = "";
        console.error(error);
    }
}

function validateAndConvert() {
    const amountField = document.getElementById('amount');
    const percentageField = document.getElementById('percentage');
    const amount = amountField.value;
    const percentage = percentageField.value;

    if (amount === "" || isNaN(amount) || percentage === "" || isNaN(percentage)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        document.getElementById('earnings').innerText = "";
    } else {
        convertCurrency();
    }
}

document.addEventListener("DOMContentLoaded", convertCurrency);
