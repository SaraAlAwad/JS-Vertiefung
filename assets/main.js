console.log(typeof ("john"));
console.log(typeof (false));
console.log(typeof ([1, 2, 3, 4]));
console.log(typeof ({ name: 'John', age: 34 }));
console.log(typeof (new Date()));
console.log(typeof (" "));
console.log(typeof (3 + 2 == 5));
console.log(typeof (3 + "3"));

// Aufgabe Lev1_8
let x = 20;
let y = 30;
console.log(x + y);
let sub1 = y - x;
console.log(sub1);
let sub2 = x - y;
console.log(sub2);
let multi = x * y;
console.log(multi);
let division = x / y;
console.log(division);
let z = 10;
resultOne = (x * y) / 10;
console.log(resultOne);

let a = 15;
let b = 9;
let rest = 15 % 9;
console.log(rest);
let c = 20;
let resultTow = (a + b) * c;
console.log(resultTow);
let inc = a++;
console.log(a);
let dec = b--;
console.log(b);
let resultThree = a - b;
console.log(resultThree);
console.log(resultOne % resultTow);

// Aufgabe Lev2_1
let home = document.getElementById("navHome");
function change() {
    console.log('test');
    home.classList.add("bg");
}
// Aufgabe lev2-2
let vorName = document.getElementById("vorname");
let nachName = document.getElementById("nachname");
let land = document.getElementById("land");
// let aus=document.getElementById("aus");
// let canada=document.getElementById("can");
// let usa=document.getElementById("usa");
function send() {
    console.log("test");
    console.log(vorName.value);
    console.log(nachName.value);
    console.log(land.value);
}