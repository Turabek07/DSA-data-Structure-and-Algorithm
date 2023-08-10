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

// Output will be :  
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

// Pattern3

function numbersTriangle(rows){
  for(let i = 1;i <= rows;i++){
    let line = '';
    for(let j = 1; j <= i; j++){
      line+= j + '';
    }
    console.log(line)
  }
}
numbersTriangle(5);

// Output will be:
    "1"
    "12"
    "123"
    "1234"
    "12345"
//------------------------------------------------