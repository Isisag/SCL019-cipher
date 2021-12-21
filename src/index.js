import cipher from './cipher.js';

// console.log(cipher);
  
let cipherBtn = document.getElementById('cipher');  
let userName = document.getElementById('userName');
let userNameView = document.getElementById('userNameView');
  
  if(cipherBtn){
  cipherBtn.addEventListener("click", function() {
  let offset = parseInt(document.getElementById('range').value);  // input del usuario
  let userInput= document.getElementById('input-user').value;  // rango del usuario
  document.getElementById('parrafo').innerHTML = cipher.encode(offset , userInput);
  }); 
}   

let decipherBtn = document.getElementById('decipher')
if(decipherBtn){
  decipherBtn.addEventListener("click", function() {
    let offset = parseInt(document.getElementById('range').value);  // input del usuario
    let userInput= document.getElementById('input-user').value;  // rango del usuario
    document.getElementById('parrafo').innerHTML = cipher.decode(offset , userInput);
    });
  }

if(userName){
userName.addEventListener('keyup', function(){
  userNameView.innerHTML = userName.value;
})
}
