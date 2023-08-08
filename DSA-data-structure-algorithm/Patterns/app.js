// PATTERN 1
function pattern1(a){
  for(let i = 0;i<a;i++){
    let row = ''
  for(let j = 0; j<a;j++){
    row += '*'
  }
 console.log(row)
  }
}
pattern1(5)

// Answer will be 
   "*****"
   "*****"
   "*****"
   "*****"
   "*****"

// --------------------------------------------

// Pattern 2

function triangle(a){
  for(let i = 0;i<a;i++){
    let row = ''
  for(let j = 0; j<=i;j++){
    row += '*'
  }
 console.log(row)
  }
}
triangle(5)

//Output will be :
      "*"
      "**"
      "***"
      "****"
      "*****"

//--------------------------------------------

