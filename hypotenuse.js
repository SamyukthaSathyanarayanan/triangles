const input=document.querySelectorAll(".sides");
const display=document.querySelector("#output");
const clickbtn=document.querySelector("#check");  

clickbtn.addEventListener('click', Hypotenuse)

function calcHypo(a,b) { 
  const hyp = Math.sqrt(a**2 + b**2);
  return hyp;
} 

function Hypotenuse() {  
  const hyp = calcHypo(Number(input[0].value),Number(input[1].value));
  if(Number(input[0].value) >0 && Number(input[1].value) > 0 ) {
      display.innerText="The hypotenuse is " + hyp.toFixed(2);
    }
  else{
    display.innerText="Please enter positive number greater than 0";
  }
}