"use stric";

let input = document.querySelector(".input");

let one = document.querySelector(".num-1");
let two = document.querySelector(".num-2");
let three = document.querySelector(".num-3");
let four = document.querySelector(".num-4");
let five = document.querySelector(".num-5");
let six = document.querySelector(".num-6");
let seven = document.querySelector(".num-7");
let eight = document.querySelector(".num-8");
let nine = document.querySelector(".num-9");
let nol = document.querySelector(".num-0");

let btnClear = document.querySelector(".btn-clear");
let btnProsent = document.querySelector(".btn-prosent");
let btnManfiy = document.querySelector(".btn-manfiy");
let btnBulish = document.querySelector(".btn-bol");
let btnKopaytirish = document.querySelector(".btn-kop");
let btnPlus = document.querySelector(".btn-plus");
let btnMinus = document.querySelector(".btn-minus");
let btnPoint = document.querySelector(".btn-point");
let btnBarobar = document.querySelector(".btn-bar");

let birinchiSon = [];
let ikkinchiSon = [];
// birinchi va ikkinchi sonlar
let bir = Number(birinchiSon.join(""));
let ikki = Number(ikkinchiSon.join(""));

one.addEventListener("click", function (bir) {
  birinchiSon.push(1);
  input.value = birinchiSon.join("");
  ikkinchiSon.push(1);
});

two.addEventListener("click", function (bir) {
  birinchiSon.push(2);
  input.value = birinchiSon.join("");
  ikkinchiSon.push(2);
});

three.addEventListener("click", function (bir) {
  birinchiSon.push(3);
  input.value = birinchiSon.join("");
  ikkinchiSon.push(3);
});

four.addEventListener("click", function (bir) {
  birinchiSon.push(4);
  input.value = birinchiSon.join("");
  ikkinchiSon.push(4);
});

five.addEventListener("click", function (bir) {
  birinchiSon.push(5);
  input.value = birinchiSon.join("");
  ikkinchiSon.push(5);
});

six.addEventListener("click", function (bir) {
  birinchiSon.push(6);
  input.value = birinchiSon.join("");
  ikkinchiSon.push(6);
});

seven.addEventListener("click", function (bir) {
  birinchiSon.push(7);
  input.value = birinchiSon.join("");
  ikkinchiSon.push(7);
});

eight.addEventListener("click", function (bir) {
  birinchiSon.push(8);
  input.value = birinchiSon.join("");
  ikkinchiSon.push(8);
});

nine.addEventListener("click", function (bir) {
  birinchiSon.push(9);
  input.value = birinchiSon.join("");
});

nol.addEventListener("click", function (bir) {
  birinchiSon.push(0);
  input.value = birinchiSon.join("");
  ikkinchiSon.push(0);
});

btnPoint.addEventListener("click", function () {
  birinchiSon.push(".");
  input.value = birinchiSon.join("");
});

// btn clear
btnClear.addEventListener("click", function () {
  input.value = 0;
  birinchiSon = [];
  ikkinchiSon = [];
});

// btn ko'paytirish
btnKopaytirish.addEventListener("click", function () {
  birinchiSon.push(" x ");
  input.value = birinchiSon.join("");
  for (let i = 0; i < birinchiSon.length; i++) {
    if (birinchiSon[i] == " x ") {
      for (let j = i; j < birinchiSon.length - i; j++) {
        ikkinchiSon.push(birinchiSon[j + 1]);
      }
    }
  }
});

// btn barobar
let natija;
btnBarobar.addEventListener("click", function () {
  natija = Number(birinchiSon.join("")) * Number(ikkinchiSon.join(""));
  input.value = natija;
});

// btn protsent
btnProsent.addEventListener("click", function () {
  let protsent = Number(birinchiSon.join("")) / 100;
  input.value = protsent;
});

// ko'paytirish
let kop = [];
let kopaytirish = Number(kop.join(""));

// bo'lish
let bol = [];
let bolish = Number(bol.join(""));

// qo'shish
let qosh = [];
let qoshish = Number(qosh.join(""));

// ayirish
let ay = [];
let ayirish = Number(ay.join(""));

console.log(ikkinchiSon);
console.log(birinchiSon);
console.log(bir);
console.log(ikki);
console.log(natija);
