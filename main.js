const passInput = document.querySelector('#pass');
const showText = document.querySelector('.show');
const text = document.querySelector('.text');

passInput.addEventListener('input', ()=> {
   if (passInput.value.length < 0) {
       showText.style.display = "block";
    } else {
    showText.style.display = "none";
    }
    
    
    if (passInput.value.length < 4) {
       text.innerHTML = "week";
       showText.style.color = "yellow";
       passInput.style.borderColor = "yellow";
       passInput.style.color = "yellow";
   } else if (passInput.value.length >= 4 && passInput.value.length < 8) {
       text.innerHTML = "Medium";
       showText.style.color = "white";
       passInput.style.color = "white";
       passInput.style.borderColor = "white"
   }
   else if (passInput.value.length >= 8) {
       text.innerHTML = "Strong";
       showText.style.color = "greenyellow";
       passInput.style.color = "greenyellow";
       passInput.style.borderColor = "greenyellow";
   }  else {
       showText.style.display = "none";
   } 
});