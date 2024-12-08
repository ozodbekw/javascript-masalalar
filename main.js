// +______ Boolean tips______+

const numberA = 1;
const numberB = 2;
const numberC = 3;

// 1-masala
if (numberA == "") {
  console.log("A son uchun Qiymat kiritmadingizku");
} else if (numberA % 2 == 0) {
  console.log("1-masala javobi bu son juft son 100%");
} else {
  console.log("1-masala javobi: Bu son juft son emasku!");
}

// 2-masala
if (numberA >= 0 || numberB < -2) {
  console.log("2-masala javobi: Jumla togri");
} else {
  console.log("2-masala javobi: Jumla not'g'ri");
}

// 3-masala
if (
  (numberB > numberA && numberB < numberC) ||
  (numberB < numberA && numberB > numberC)
) {
  console.log("3-masala javobi: Jumla tog'riku!");
} else {
  console.log("3-masala javobi: Jumla notog'riku!");
}

// 4-masala
if (numberA % 2 == 1 && numberB % 2 == 1) {
  console.log("4-masala javobi: A va B sonlar Toq sonlar");
} else {
  console.log(
    "4-masala javobi: A va B sonlar Ikkalasi ham toq emas toq sonlar kiriting e!"
  );
}

// 5-masala
if (numberA % 2 == 1 || numberB % 2 == 1) {
  console.log("5-masala javobi: A va B sonlarning biri Toq son");
} else {
  console.log("5-masala javobi: A va B sonlar orasida ham toq sonlar yoq!");
}

// 6-masala
if (
  (numberA % 2 == 1 && numberB % 2 == 0) ||
  (numberA % 2 == 0 && numberB % 2 == 1)
) {
  console.log("6-masala javobi: A va B sonlarning faqatgina biri Toq son");
} else {
  console.log(
    "6-masala javobi: A va B sonlar Ikkalasi ham toq emas toq sonlar kiriting e!"
  );
}

// 7-masala
if (numberA > 0 && numberB > 0 && numberC > 0) {
  console.log("7-masala javobi: A, B va C  sonlarning hammasi musbat son");
} else {
  console.log("7-masala javobi: A, B va C  sonlarning hammasi musbat son emas");
}

// 8-masala
if (
  (numberA > 0 && numberB < 0 && numberC < 0) ||
  (numberA > 0 && numberB < 0 && numberC > 0) ||
  (numberA < 0 && numberB > 0 && numberC < 0)
) {
  console.log(
    "8-masala javobi: A, B va C  sonlarning faqatgina bittasi musbat son"
  );
} else {
  console.log(
    "8-masala javobi: A, B va C  sonlarning faqatgina bittasi musbat son emas"
  );
}

// 9-masaala
if (
  (numberA < 0 && numberB > 0 && numberC > 0) ||
  (numberA > 0 && numberB < 0 && numberC > 0) ||
  (numberA > 0 && numberB > 0 && numberC < 0)
) {
  console.log(
    "9-masala javobi: A, B va C  sonlarning faqatgina ikkitasi musbat son"
  );
} else {
  console.log(
    "9-masala javobi: A, B va C  sonlarning faqatgina bittasi musbat son emas"
  );
}

// 10-masala
if (numberA > 9 && numberA < 100 && numberA % 2 == 0) {
  console.log("10-masala javobi: Bu son 2 xonali juft son");
} else {
  console.log("10-masala javobi: Bu son 2 xonali juft son emas");
}

// 11-masala
if (numberA > 99 && numberA < 1000 && numberA % 2 == 1) {
  console.log("11-masala javobi: Bu son 3 xonali toq son ");
} else {
  console.log("11-masala javobi: Bu son 3 xonali toq son emas ");
}

// 12-masala
if (
  numberA + numberB == 0 ||
  numberC + numberB == 0 ||
  numberA + numberC == 0
) {
  console.log("12-masala javobi: Bu son orasida qarama-qarshi sonlar bor ");
} else {
  console.log("12-masala javobi: Bu son orasida qarama-qarshi sonlar yo'q ");
}

const lastNumber = numberA % 10;
const firstNumber = (numberA - (numberA % 100)) / 100;
const middleNumber = ((numberA % 100) - lastNumber) / 10;

// 13-masala
if (firstNumber < middleNumber < lastNumber) {
  console.log("13-masala javobi: Bu sonning raqamlari osivchi");
} else {
  console.log("13-masala javobi: Bu sonning raqamlari osivchi emas");
}

// 14-masala
if (firstNumber > middleNumber > lastNumber) {
  console.log("14-masala javobi: Bu sonning raqamlari kamayuvchi");
} else if (firstNumber < middleNumber < lastNumber) {
  console.log("14-masala javobi: Bu sonning raqamlari o'suvchi");
} else {
  console.log(
    "14-masala javobi: Bu sonning raqamlari o'suvchi ham kamayuvchi ham emas"
  );
}

// 15-masala
if (
  (firstNumber, middleNumber, lastNumber) ==
  (lastNumber, middleNumber, firstNumber)
) {
  console.log(
    "15-masala javobi: Bu sonlar chapdan o'ngga va ongdan chapga oqilda bir xil"
  );
} else {
  console.log(
    "15-masala javobi: Bu sonlar chapdan o'ngga va ongdan chapga oqilda bir xil emas"
  );
}

// +______Begin tips______+

// 1-masala
const doiraRadius = 5;
const doiraP = 3.14;

// l= 2 * doiraP * doiraRadius
// s= doiraP * doiraRadius^2

console.log("Doiraning yuzi: ", doiraP * (doiraRadius ^ 2));
console.log("Doiraning uznunligi: ", 2 * doiraP * doiraRadius);

// 2-masala
console.log("2-masala javobi: ", Math.sqrt(numberA * numberB));

// 3-masala
const numberX = numberA;
console.log("3-masala javobi: ", 3 * (numberX ^ 6) - 6 * (numberX ^ 2) - 7);

// 4-masala
// tushunmadim

// 5-masala
let sonA = 3;
let sonB = 7;

console.log((sonA = sonB), (sonB = sonA));

// +______Integer______+

// 1-masala
const ikkiXonaliSon = 23;
console.log("Birliklar xonasidagi son: ", ikkiXonaliSon % 10);
console.log(
  "O'nliklar xonasidagi son: ",
  (ikkiXonaliSon - (ikkiXonaliSon % 10)) / 10
);

// 2-masala
console.log(ikkiXonaliSon);
console.log(ikkiXonaliSon % 10, (ikkiXonaliSon - (ikkiXonaliSon % 10)) / 10);

// 3-masala
const uchXonaliSon = 123;
console.log("3-masala javobi: ", (uchXonaliSon - (uchXonaliSon % 100)) / 100);

// 4-masala
const input = 1239;
console.log("4-masala javobi: ", ((input - (input % 100)) / 100) % 10);

// 5-masala
const nSekund = 7200;
console.log(nSekund, "sekund");
console.log(nSekund / 60, "minut");
console.log(nSekund / 3600, "soat");
