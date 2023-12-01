// Title
const title = document.querySelector("#title");
//_______________________________________________________________________________
// Balance
const showBalance = document.querySelector("#showBalance");
//_______________________________________________________________________________
// Input
const input = document.querySelector("input");
//_______________________________________________________________________________
// Table
const tableArea = document.querySelector("#tableArea");
//_______________________________________________________________________________
// Buttons
const increaseBalance = document.querySelector("#increaseBalance");
const withdrawMoney = document.querySelector("#withdrawMoney");
const currentBalance = document.querySelector("#currentBalance");
//_______________________________________________________________________________
// Date Elements
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fullDate = `${day}.${month}.${year}`;
//_______________________________________________________________________________

const name = prompt("Zəhmət Olmasa Adınızı Qeyd Edin:");
title.innerText =
  name != ""
    ? `Salam ${name} Bank Kalkulyatoruna Xoş Gəlmisiniz!`
    : `Bank Kalkulyatoruna Xoş Gəlmisiniz!`;

let myObject = [
  {
    type: "",
    index: 0,
    balance: 0,
    date: fullDate,
  },
];

increaseBalance.addEventListener("click", () => {
  let inputValue = input.value;

  myObject
    .map((item) => {
      if (inputValue == "") {
        input.value = "";
        alert("Artırıla bilinəcək hər hansı bir məbləğ daxil olunmayıb!");
      } else if (inputValue < 0) {
        input.value = "";
        alert("Yanlış daxil etmə");
      } else if (inputValue > 10000) {
        input.value = "";
        alert("Siz maksimum 10.000 - a qədər balans artımı edə bilərsiniz");
      } else {
        let newBalance = item.balance + +inputValue;
        item.balance += newBalance;
        item.type = "Mədaxil";
        input.value = "";
      }
    })
    .join("");
});
withdrawMoney.addEventListener("click", () => {
  let inputValue = input.value;

  myObject
    .map((item) => {
      if (inputValue == "") {
        input.value = "";
        alert("Çıxarıla bilinəcək hər hansı bir məbləğ daxil olunmayıb!");
      } else if (inputValue < 0) {
        input.value = "";
        alert("Yanlış daxil etmə");
      } else if (item.balance < +inputValue) {
        input.value = "";
        alert("Balansda kifayət qədər məbləğ yoxdur");
      } else {
        let newBalance = item.balance - +inputValue;
        item.balance = newBalance;
        item.type = "Məxaric";
        input.value = "";
      }
    })
    .join("");
});
currentBalance.addEventListener("click", () => {
  myObject.map((item) => {
    showBalance.innerText =
      item.balance != 0 ? `Balans: ${item.balance}₼` : `Balans: 0₼`;
    input.value = "";
  });
});
