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

 // Pattern 4

 function doubleTri(n){
  for(let i = 1; i <= n;i++){
    let doubleTriangle = '';
    for(let j = 1;j<=i;j++){
      doubleTriangle+= i + ''
    }
    console.log(doubleTriangle)
  }
}
doubleTri(5)

// Output will be:
      "1"
      "22"
      "333"
      "4444"
      "55555"

//----------------------------------------

// Pattern 5 

function patternFive(n){
  for(let i = 1;i <=n;i++){
    let line = '';
    for(let j = 0; j < n-i+1;j++){
      line+= '*';
    }
    console.log(line)
  }
}
patternFive(5)

//OutPut will be: 
    '*****'
    '****'
    '***'
    '**'
    '*'

//--------------------------------------------------

//Pattern 6

function patternSix(n){
  for(let i = 1;i<=n;i++){
    let line = '';
    for(j = 1;j <= n-i+1;j++){
      line+= j + '';
    }
    console.log(line)
  }
}
patternSix(5)

//Ourput will be:

      '12345'
      '1234'
      '123'
      '12'
      '1'

//-----------------------------------------------------------

//Pattern 7

function patternSeven(n){
  for(let i = 0;i<n;i++ ){
    let line = '';
    //space
    for(let j = 0;j < n-i-1;j++){
      line+= '';
    }
    //stars
    for(let j = 0;j < 2*i+1;j++){
      line+= '*';
    }
    //space
    for(let j = 0;j < n-i-1;j++){
      line+= '';
    }
    console.log(line);
  }
}
patternSeven(5)

// Output will be

"    *    "
"   ***   "
"  *****  "
" ******* "
"*********"

//----------------------------------------------------


// Pattern 8
function patternEight(n){
  for(let i = 0; i < n;i++){
    let line = '';
    //space
    for(let j = 0;j<i;j++){
      line+= ' ';
    }
    //stars
    for(let j = 0; j < 2 * n - (2*i+1);j++){
      line+= "*";
    }
    //space
    for(let j = 0;j<i;j++){
      line+= ' ';
    }
    console.log(line);
  }
}
patternEight(5)

//Output will be : 

"*********"
" ******* "
"  *****  "
"   ***   "
"    *    "
//-------------------------------------------------------

// Pattern 9

function patternEight(n){
  for(let i = 0; i < n;i++){
    let line = '';
    //space
    for(let j = 0;j<i;j++){
      line+= ' ';function patternSeven(n){
  for(let i = 0;i<n;i++ ){
    let line = '';
    //space
    for(let j = 0;j < n-i-1;j++){
      line += ' ';
    }
    //stars
    for(let j = 0;j < 2*i+1;j++){
      line += '*';
    }
    //space
    for(let j = 0;j < n-i-1;j++){
      line += ' ';
    }
    console.log(line);
  }
}
patternSeven(5)
    }
    //stars
    for(let j = 0; j < 2 * n - (2*i+1);j++){
      line+= "*";
    }
    //space
    for(let j = 0;j<i;j++){
      line+= ' ';
    }
    console.log(line);
  }
}
patternEight(5)

//Output will be:
  "    *    "
  "   ***   "
  "  *****  "
  " ******* "
  "*********"
  "*********"
  " ******* "
  "  *****  "
  "   ***   "
  "    *    "
//---------------------------------------------------------

// PATTERN 10
function makes_Rug(a, b) {
    for (let i = 0; i < a; i++) {
        let line = '';
        for (let j = 0; j < b; j++) {
            if (j == i || j == b - i - 1 ) {
                line += ' ';
            }
          else {
                line += '0';
            }
        }
        console.log(line);
    }
}
makes_Rug(6,6)

// Output will be:

//   0 0 0 0  
// 0   0 0   0
// 0 0     0 0
// 0 0     0 0
// 0   0 0   0
//   0 0 0 0  