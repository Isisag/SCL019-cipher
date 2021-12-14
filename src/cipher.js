const cipher = {

 encode: (userInput, offset) => {
 
  let stringSplit = userInput.split('');
  let stringOutput = ''; 

  stringSplit.forEach( (character)=> {
    if( character == ' ' || character == '.' || character ==  ',' )
      stringOutput = stringOutput + character
    else{
    let codeInput = character.charCodeAt(); 
    let codeOutput = Math.abs((codeInput - 65 + offset) %26 + 65);
    stringOutput = stringOutput.toUpperCase() + String.fromCharCode(codeOutput);
  }});
 return stringOutput;
},
 decode: (userInput,offset) => {
          
 let stringSplit = userInput.split('');
 let stringOutput = ''; 
 
 stringSplit.forEach( (character)=> {
  if( character == ' ' || character == '.' || character ==  ',' )
    stringOutput = stringOutput + character
  else{
  let codeInput = character.charCodeAt(); 

  // let codeOutput = (codeInput - 65 + offset) %26 + 65;
  // let returnPosition = Math.abs(offset - codeInput);
  
  // let codeOutput = Math.abs((offset - 65 + codeInput) %26 + 65) 
  let codeOutput = Math.abs(offset - codeInput)
  
  stringOutput = stringOutput.toUpperCase() + String.fromCharCode(codeOutput);
}
   
  console.log('decode input ' + userInput)
  console.log('decode offset ' + offset)
  console.log('decode output ' + stringOutput)
 
})
 return stringOutput;
},

}

export default cipher;