const cipher = {

 encode: (offset , userInput) => {
 
  let stringSplit = userInput.split('');
  let stringOutput = ''; 

  stringSplit.forEach( (character) => {

    let codeInput = character.charCodeAt();
     // caracteres especiales
    if( codeInput >= 32 && codeInput <= 64 || codeInput >= 91 && codeInput <= 96){
      stringOutput = stringOutput + character
    }  
    // Minús
     if( codeInput >= 97 && codeInput <= 122 ){
    let codeOutput = (codeInput - 97 + offset) %26 + 97;
    stringOutput = stringOutput.toLowerCase() + String.fromCharCode(codeOutput);
    } // Mayús
    if( codeInput >= 65 && codeInput <= 90 ) {
    let codeOutput = (codeInput - 65 + offset) %26 + 65;
    stringOutput = stringOutput.toUpperCase() + String.fromCharCode(codeOutput);
    }
    });

   return stringOutput;
},

 decode: (offset , userInput) => {
          
 let stringSplit = userInput.split('');
 let stringOutput = ''; 
 
 stringSplit.forEach( (character)=> {

  
  let codeInput = character.charCodeAt(); 

  if( codeInput >= 32 && codeInput <= 64){
  stringOutput = stringOutput + character
  } //minus
  if( codeInput >= 97 && codeInput <= 122 ){
    let codeOutput =  Math.abs( (codeInput + 97 - offset) %26 +97 ) ;
    stringOutput = stringOutput.toLowerCase() + String.fromCharCode(codeOutput);
  }//mayus
  if( codeInput >= 65 && codeInput <= 90 ) {
    let codeOutput = Math.abs( (codeInput + 65 - offset ) %26 +65 );
    stringOutput = stringOutput.toUpperCase() + String.fromCharCode(codeOutput);
  }
})
 return stringOutput;
},

}

export default cipher;
