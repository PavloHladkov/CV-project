// Мінімум

// Додавання 0.1 і 0.2
const sum1 = (0.1 + 0.2).toFixed(1);
alert('Додавання 0.1 і 0.2, результат: ' + sum1); // Результат: 0.3


// Додавання рядка "1" і цифри 2
const num1 = "1";
const num2 = 2;
const sum2 = Number(num1) + num2;
alert('Додавання рядка "1" і цифри 2, результат: ' + sum2); // Результат: 3

// Обсяг флешки та кількість файлів
const fileSizeMB = 820;
const flashDriveSizeGB = prompt('Якщо розмір одного файлу ' + fileSizeMB + ' MB' + ', щоб дізнатись кількість файлів котрі помістяться на флешку, введіть обсяг наявної флешки в Гб:');
const filesCount = Math.floor((flashDriveSizeGB * 1024) / fileSizeMB);
alert('Кількість файлів, при розмірі одного файлу '+ fileSizeMB + ' MB' + ', які помістяться на флешці: ' + filesCount + ' раза(ів)');

// Норма

// Кількість шоколадок та здача
const walletMoney = prompt('Введіть суму грошей в гаманці в гривнях:');
const chocolatePrice = prompt('Введіть ціну однієї шоколадки в гривнях:');
const chocolatesCount = Math.floor(walletMoney / chocolatePrice);
const change = walletMoney % chocolatePrice;
alert('Кількість шоколадок, які можна купити: ' + chocolatesCount + ' штук' + ' та здача: ' + change + ' грн');

// Задом наперед
const number = prompt('Введіть тризначне число:');
const reversedNumber = Number(number.toString().split('').reverse().join(''));
alert('Задом наперед: ' + reversedNumber);

// Максимум

// Нараховані відсотки
const depositAmount = prompt('Введіть суму вкладу в банк на 2 місяці:');
const interestRate = 5 / 100 / 12; // Місячна процентна ставка
const interest = (depositAmount * interestRate * 2).toFixed(2);
alert('Сума нарахованих відсотків: ' + interest + '%');

// Вирази
const firstTask = 2 && 0 && 3; // 0
alert('2 && 0 && 3, результат: ' + firstTask);

const secondTask = 2 || 0 || 3; // 2
alert('2 || 0 || 3, результат: ' + secondTask);

const thirdTask = 2 && 0 || 3; // 3
alert('2 && 0 || 3, результат: ' + thirdTask);

