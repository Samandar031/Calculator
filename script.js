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

function sum() {
  let inputNumber = birinchiSon.join("");
  input.value = inputNumber;
}

one.addEventListener("click", () => {
  birinchiSon.push(1);
  sum();
});

two.addEventListener("click", () => {
  birinchiSon.push(2);
  sum();
});

three.addEventListener("click", () => {
  birinchiSon.push(3);
  sum();
});

four.addEventListener("click", () => {
  birinchiSon.push(4);
  sum();
});

five.addEventListener("click", () => {
  birinchiSon.push(5);
  sum();
});

six.addEventListener("click", () => {
  birinchiSon.push(6);
  sum();
});

seven.addEventListener("click", () => {
  birinchiSon.push(7);
  sum();
});

eight.addEventListener("click", () => {
  birinchiSon.push(8);
  sum();
});

nine.addEventListener("click", () => {
  birinchiSon.push(9);
  sum();
});

nol.addEventListener("click", () => {
  birinchiSon.push(0);
  sum();
});

btnPoint.addEventListener("click", () => {
  birinchiSon.push(".");
  sum();
});

btnPlus.addEventListener("click", () => {
  birinchiSon.push("+");
  sum();
});

btnBulish.addEventListener("click", () => {
  birinchiSon.push("/");
  sum();
});

btnMinus.addEventListener("click", () => {
  birinchiSon.push("--");
  sum();
});

btnKopaytirish.addEventListener("click", () => {
  birinchiSon.push("x");
  sum();
});

// btn clear
btnClear.addEventListener("click", () => {
  input.value = 0;
  birinchiSon = [];
  ikkinchiSon = [];
});

// btn ko'paytirish
// btnKopaytirish.addEventListener("click", () => {
//   birinchiSon.push(" x ");
//   input.value = birinchiSon.join("");
//   for (let i = 0; i < birinchiSon.length; i++) {
//     if (birinchiSon[i] == " x ") {
//       for (let j = i; j < birinchiSon.length - i; j++) {
//         ikkinchiSon.push(birinchiSon[j + 1]);
//       }
//     }
//   }
// });

// btn barobar

// btnBarobar.addEventListener("click", () => {
//   let tekshirish = input.value.split("");
//   if (tekshirish.includes("+")) {
//     let qosh = input.value.split("+");
//     let qosh1 = +qosh[0];
//     let qosh2 = +qosh[1];
//     let qoshnatija = qosh1 + qosh2;
//     input.value = qoshnatija;
//     console.log(qosh);
//   } else if (tekshirish.includes("-")) {
//     let ayir = input.value.split("-");
//     let ayir1 = +ayir[0];
//     let ayir2 = +ayir[1];
//     let ayirnatija = ayir1 - ayir2;
//     input.value = ayirnatija;
//   } else if (tekshirish.includes("x")) {
//     let kopay = input.value.split("x");
//     let kopay1 = +kopay[0];
//     let kopay2 = +kopay[1];
//     let kopaynatija = kopay1 * kopay2;
//     input.value = kopaynatija;
//   } else if (tekshirish.includes("/")) {
//     let bol = input.value.split("/");
//     let bol1 = +bol[0];
//     let bol2 = +bol[1];
//     let bolnatija = bol1 * bol2;
//     input.value = bolnatija;
//   }
// natija = Number(birinchiSon.join("")) * Number(ikkinchiSon.join(""));
// input.value = natija;
// });

// btn protsent
// btnProsent.addEventListener("click", function () {
//   let protsent = Number(birinchiSon.join("")) / 100;
//   input.value = protsent;
// });
g
let natija;
btnBarobar.addEventListener("click", function () {
  let tekshirish = input.value.split("");
  if (tekshirish.includes("+")) {
    let join = input.value.split("+");
    let bir = +join[0];
    let ikki = +join[1];
    let qosh = bir + ikki;
    input.value = qosh;
  } else if (tekshirish.includes("x")) {
    let join = input.value.split("x");
    let bir = +join[0];
    let ikki = +join[1];
    let qosh = bir * ikki;
    input.value = qosh;
  } else if (tekshirish.includes("/")) {
  //   let join = input.value.split("/");
  //   let bir = +join[0];
  //   let ikki = +join[1];
  //   let qosh = bir / ikki;
  //   input.value = qosh;
  // // } else if (tekshirish.includes("--")) {
  //   let join = input.value.split("--");
  //   let bir = +join[0];
  //   let ikki = +join[1];
  //   let qosh = bir - ikki;
  //   input.value = qosh;
  // }
});
