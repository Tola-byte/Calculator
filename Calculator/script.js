const bill = document.querySelector('.bill');
const numberOfPeople = document.querySelector('.people');
const tip = document.querySelectorAll('.ok');
// const tipAmount = document.querySelector('h1');
const tflex = document.querySelector('.tflex')
const btn = document.querySelector('.resetbtn');
const resetTola = document.getElementById('myBtn');
// const tips = tip.input.value;

const display = document.querySelector('.display');

     
let value;

tip.forEach((item) => item.addEventListener("click", (e) => {
      value = e.target.value;
       console.log(value);
}))
 
function tipSolution(){
   let x = bill.value;
     let y = value;
     let z = numberOfPeople.value;
  //let value = 0;
    const tipAmount = Math.ceil((x * (y/100))/(z));
    let a = x*(y/100);
    const totalPrice = Math.ceil((+x + +a)/(z));
    display.textContent = '$' + tipAmount; 
    tflex.textContent = '$' + totalPrice;    
}

if(btn){
 btn.addEventListener('click' ,tipSolution);
}

if(resetTola) {
   resetTola.addEventListener('click' , function (){
   bill.value = " ";
   numberOfPeople.value = " ";
   let tipAmount = 0;
   let totalPrice = 0;
   display.textContent = "$" + tipAmount;
   tflex.textContent = "$" + totalPrice; 
});
}