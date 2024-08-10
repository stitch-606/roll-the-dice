const r1 = document.getElementById("result1");
const r2 = document.getElementById("result2");
const r3 = document.getElementById("result3");
const btn = document.getElementById("go");

let count1 = 0;
let count2 = 0;
let count3 = 0;

btn.onclick = function() {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let num3 = Math.floor(Math.random() * 10) + 1;
  
  r1.textContent = num1;
  r2.textContent = num2;
  r3.textContent = num3;
}