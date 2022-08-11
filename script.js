const doc = document;
const plusbutton = doc.getElementById("plusbutton");
const minusbutton = doc.getElementById("minusbutton");
const multbutton2 = doc.getElementById("multbutton2");
const multbutton3 = doc.getElementById("multbutton3");
const hoch2button = doc.getElementById("hoch2button");
const resetbutton = doc.getElementById("resetbutton");
const addNumber = doc.getElementById("numberAdd");
const subNumber = doc.getElementById("numberSub");
const multNumber = doc.getElementById("numberMult");
const divNumber = doc.getElementById("numberDiv");
const addform = doc.getElementById("addForm");
const subform = doc.getElementById("subForm");
const multform = doc.getElementById("multForm");
const divform = doc.getElementById("divForm")
var number = 0;

//Plus Knopf
plusbutton.addEventListener("click", () => {
    number++;
    document.getElementById("number").innerHTML = number
    console.log(number);
});

//Minus Knopf
minusbutton.addEventListener("click", ()=> {
    number--;
    document.getElementById("number").innerHTML = number;
})

//Mal 2 Knopf
multbutton2.addEventListener("click", () => {
    number = number *2;
    document.getElementById("number").innerHTML = number
})

//Mal 3 Knopf
multbutton3.addEventListener("click", () => {
    number = number *3;
    document.getElementById("number").innerHTML = number
})

//Mal 3 Knopf
hoch2button.addEventListener("click", () => {
    number = number *number;
    document.getElementById("number").innerHTML = number
})


//Reset Knopf
resetbutton.addEventListener("click", () => {
    number = 0;
    document.getElementById("number").innerHTML = number;
})

//Plus Feld 
addform.addEventListener("submit", (e)=>{
    e.preventDefault();
    number = number+parseInt(addNumber.value,10);
    document.getElementById("number").innerHTML = number
})

//Minus Feld
subform.addEventListener("submit", (e)=> {
    e.preventDefault();
    number = number - parseInt(subNumber.value, 10);
    document.getElementById("number").innerHTML = number;
})

//Mal Feld
multform.addEventListener("submit", (e)=> {
    e.preventDefault();
    number = number * parseInt(multNumber.value, 10);
    document.getElementById("number").innerHTML = number;
})

//Geteilt Feld
divform.addEventListener("submit", (e)=>{
    e.preventDefault();
    number = number / parseInt(divNumber.value,10);
    document.getElementById("number").innerHTML = number;
})



