const doc = document;
const plusbutton = doc.getElementById("plusbutton");
const minusbutton = doc.getElementById("minusbutton");
const resetbutton = doc.getElementById("resetbutton");
const addNumber = doc.getElementById("numberAdd");
const subNumber = doc.getElementById("numberSub");
const addform = doc.getElementById("addForm");
const subform = doc.getElementById("subForm")
var number = 0;

plusbutton.addEventListener("click", () => {
    number++;
    document.getElementById("number").innerHTML = number
    console.log(number);
});

minusbutton.addEventListener("click", ()=> {
    number--;
    document.getElementById("number").innerHTML = number;
})

resetbutton.addEventListener("click", () => {
    number = 0;
    document.getElementById("number").innerHTML = number;
})

addform.addEventListener("submit", (e)=>{
    e.preventDefault();
    number = number+parseInt(addNumber.value,10);
    document.getElementById("number").innerHTML = number
})

subform.addEventListener("submit", (e)=> {
    e.preventDefault();
    number = number - parseInt(subNumber.value, 10);
    document.getElementById("number").innerHTML = number;
})


