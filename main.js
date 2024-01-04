const number = document.getElementById("number");
const btnDecrease = document.getElementById("btn-decrease");
const btnIncrease = document.getElementById("btn-increase");
const btnReset = document.getElementById("btn-restar");

let sum = number.textContent;

btnIncrease.addEventListener('click', () => {
    sum++;
    number.textContent = sum;
});

btnDecrease.addEventListener('click', () => {
    sum--;
    number.textContent = sum;
});

btnReset.addEventListener('click', () => {
    sum = 0;
    number.textContent = sum;
});