// Create <p> tag with id="sorted" in HTML file.

let inpNum1 = prompt("Enter any first number.");
let inpNum2 = prompt("Enter any second number.");
let inpNum3 = prompt("Enter any third number.");
let inpNum4 = prompt("Enter any fourth number.");

let numSort = [inpNum1, inpNum2, inpNum3, inpNum4];
numSort.sort()

document.getElementById("sorted").innerHTML = numSort;


