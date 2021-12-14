import cipher from './cipher.js';

console.log(cipher);

let userName = document.getElementById('userName');
let userNameView = document.getElementById('userNameView');


document.getElementById('cipher').addEventListener("click", function() {
  let offset = parseInt(document.getElementById('range').value);  // input del usuario
  let userInput= document.getElementById('input-user').value.toUpperCase();  // rango del usuario
  document.getElementById('parrafo').innerHTML = cipher.encode(userInput, offset);
  });

  document.getElementById('decipher').addEventListener("click", function() {
    let offset = parseInt(document.getElementById('range').value);  // input del usuario
    let userInput= document.getElementById('input-user').value.toUpperCase();  // rango del usuario
    document.getElementById('parrafo').innerHTML = cipher.decode(userInput, offset);
    });

  // Funcion de Index.html
  function username() {
    userName.addEventListener("keyup", function(){
    userNameView.innerHTML = document.getElementById('userName').value;
  });
  } username()
  