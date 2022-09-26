const input=document.querySelectorAll(".angles");
const display=document.querySelector("#output");
const clickbtn=document.querySelector("#check");

clickbtn.addEventListener('click', isTriangle)

function sum(a,b,c) { 
  const sumofangles= a+b+c;
  return sumofangles;
} 

function isTriangle() {  
  const sumofangles=sum(Number(input[0].value),Number(input[1].value),Number(input[2].value));
  if(Number(input[0].value) >0 && Number(input[1].value) > 0 && Number(input[2].value) ) {
    if(sumofangles===180){
      display.innerText="Forms a triangle 😊";
    }
    else {
      display.innerText="Does not form a triangle 😔";
    }
  }  
  else{
    display.innerText="Please enter positive number greater than 0";
  }
}


