const cipher = {

 encode: (offset , userInput) => {
 
  let stringSplit = userInput.split('');
  let stringOutput = ''; 

  stringSplit.forEach( (character) => {
    if( character == ' ' || character == '.' || character ==  ',' )
      stringOutput = stringOutput + character
    else{
    let codeInput = character.charCodeAt(); 
    let codeOutput = Math.abs((codeInput - 65 + offset) %26 + 65);
    stringOutput = stringOutput.toUpperCase() + String.fromCharCode(codeOutput);
  }});
 return stringOutput;
},

 decode: (offset , userInput) => {
          
 let stringSplit = userInput.split('');
 let stringOutput = ''; 
 
 stringSplit.forEach( (character)=> {

  let codeInput = character.charCodeAt(); 

  if( character == ' ' || character == '.' || character ==  ',' )
    stringOutput = stringOutput + character
    else if( !codeInput >= 65 && codeInput <= 90){
       console.log('test');
    }
  else {
  // let codeOutput = Math.abs( 26 % (offset - codeInput) - 65 )
  // let codeOutput = Math.abs( codeInput - offset )
  let codeOutput = Math.abs( (codeInput + 65 - offset ) %26 +65 )
 
  
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

// decode: (userInput,offset) => {
          
//   let stringSplit = userInput.split('');
//   let stringOutput = ''; 
  
//   stringSplit.forEach( (character)=> {
//    if( character == ' ' || character == '.' || character ==  ',' )
//      stringOutput = stringOutput + character
//      else if( codeInput  ){
       
//      }
//    else{
//    let codeInput = character.charCodeAt(); 
//    let codeOutput = Math.abs(parseInt(offset - codeInput))
   
//    stringOutput = stringOutput.toUpperCase() + String.fromCharCode(codeOutput);
//  }
    
//    console.log('decode input ' + userInput)
//    console.log('decode offset ' + offset)
//    console.log('decode output ' + stringOutput)
  
//  })
//   return stringOutput;
//  },