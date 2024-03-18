// Мінімум

// Запитай у користувача його вік
const age = parseInt(prompt("Введіть ваш вік:"));

// Визначи, ким він є
let message;
if (age >= 0 && age <= 11) {
  message = "Ви дитина.";
} else if (age >= 12 && age <= 17) {
  message = "Ви підліток.";
} else if (age >= 18 && age <= 59) {
  message = "Ви дорослий.";
} else if (age >= 60) {
  message = "Ви пенсіонер.";
} else {
  message = "Невірні дані.";
}
alert(message);

// Запитай у користувача число від 0 до 9
const num = parseInt(prompt("Введіть число від 0 до 9:"));

// Виведи йому спецсимвол, який розташований на цій клавіші
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
if (num >= 0 && num <= 9) {
  alert("Спецсимвол для введеного числа: " + specialChars[num]);
} else {
  alert("Невірні дані.");
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні
const startNum = parseInt(prompt("Введіть початкове число діапазону:"));
const endNum = parseInt(prompt("Введіть кінцеве число діапазону:"));
let sum = 0;
for (let i = startNum; i <= endNum; i++) {
  sum += i;
}
alert("Сума чисел в діапазоні [" + startNum + ", " + endNum + "]: " + sum);

// Запитай у користувача 2 числа
const num1 = parseInt(prompt("Введіть перше число:"));
const num2 = parseInt(prompt("Введіть друге число:"));

// Знайди найбільший спільний дільник
let gcd = 1;
for (let i = 1; i <= num1 && i <= num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    gcd = i;
  }
}
alert("Найбільший спільний дільник: " + gcd);

// Запитай у користувача число
const number = parseInt(prompt("Введіть число:"));

// Виведи всі дільники цього числа
let divisors = "Дільники числа " + number + ": ";
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    divisors += i + " ";
  }
}
alert(divisors);

// Норма

// Запитай у користувача п’ятирозрядне число
const requiredNumber = prompt("Введіть п’ятирозрядне число:");

// Визначи, чи є воно паліндромом
let isPalindrome = true;
for (let i = 0; i < requiredNumber.length / 2; i++) {
  if (requiredNumber[i] !== requiredNumber[requiredNumber.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  alert("Число " + requiredNumber + " є паліндромом.");
} else {
  alert("Число " + requiredNumber + " не є паліндромом.");
}

// Запитай у користувача суму покупки
const purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));

// Виведи суму до оплати зі знижкою
let discount = 0;
if (purchaseAmount >= 200 && purchaseAmount < 300) {
  discount = 3;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
  discount = 5;
} else if (purchaseAmount >= 500) {
  discount = 7;
}
const discountedAmount = purchaseAmount * (1 - discount / 100);
alert("Сума до оплати зі знижкою " + discount + "%: " + discountedAmount);

// Запитай у користувача 10 чисел
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
  const num = parseFloat(prompt("Введіть число " + (i + 1) + ":"));
  if (num > 0) {
    positiveCount++;
  } else if (num < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (num % 2 === 0 && num !== 0) {
    evenCount++;
  } else if (num !== 0) {
    oddCount++;
  }
}

// Виведи статистику на екран
alert(
  "Додатніх чисел: " +
    positiveCount +
    "\nВід’ємних чисел: " +
    negativeCount +
    "\nНулів: " +
    zeroCount +
    "\nПарних чисел: " +
    evenCount +
    "\nНепарних чисел: " +
    oddCount
);

// Зацикли відображення днів тижня
let daysOfWeek = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П’ятниця",
  "Субота",
  "Неділя",
];
let index = 0;
do {
  alert(daysOfWeek[index] + ". Хочеш побачити наступний день?");
  index = (index + 1) % 7;
} while (confirm("Продовжимо?"));


// Максимум

// Гра «Вгадай число»
alert('Загадайте число від 0 до 100.');

let min = 0;
let max = 100;
let guessed = false;

while (!guessed) {
    const guess = Math.floor((min + max) / 2);
    const userFeedback = prompt('Ваше число > ' + guess + ', < ' + guess + ' або == ' + guess + '?');
    if (userFeedback === '==') {
        guessed = true;
        alert('Ви вгадали число: ' + guess);
    } else if (userFeedback === '>') {
        min = guess + 1;
    } else if (userFeedback === '<') {
        max = guess - 1;
    } else {
        alert('Будь ласка, введіть >, < або ==.');
    }
}

// Виведення таблиці множення
let multiplicationTable = '';
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        multiplicationTable += i + ' * ' + j + ' = ' + (i * j) + '\n';
    }
}
alert('Таблиця множення від 2 до 9:\n' + multiplicationTable);

// Запит дати
const day = parseInt(prompt('Введіть день:'));
const month = parseInt(prompt('Введіть місяць:'));
const year = parseInt(prompt('Введіть рік:'));

// Визначення наступної дати
const daysInMonth = new Date(year, month, 0).getDate();
let nextDay = day + 1;
let nextMonth = month;
let nextYear = year;

if (nextDay > daysInMonth) {
    nextDay = 1;
    nextMonth++;
    if (nextMonth > 12) {
        nextMonth = 1;
        nextYear++;
    }
}

alert('Наступна за введеною дата: ' + nextDay + '.' + nextMonth + '.' + nextYear);