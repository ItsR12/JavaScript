// Create <p> tag with id="sorted" in HTML file.

let inpName1 = prompt("Enter any first name.");
let inpName2 = prompt("Enter any second name.");
let inpName3 = prompt("Enter any third name.");
let inpName4 = prompt("Enter any fourth name.");

let nameSort = [inpName1, inpName2, inpName3, inpName4];
nameSort.sort()

document.getElementById("sorted").innerHTML = nameSort;


