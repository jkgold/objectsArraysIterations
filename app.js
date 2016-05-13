var num = 7;
function numberMagic(num){
  // console.log("hello world");
  if ( evenNumber(num) ) {
      console.log(evenNumber(num) );

      // return arguments * 2;
  } else if ( oddNumber(num)  ) {
      console.log( oddNumber(num) );
    // return num * 3;
  } else if ( noNumber (num) ) {
    console.log(noNumber(num) ) ;

  }
}
// numberMagic()
function evenNumber (num) {
  if(num % 2 === 0) {
    return num * 2
  }
  // console.log("Hello World")
}
function oddNumber (num) {
  if(num % 3 === 0) {
    return num * 3
  }

function noNumber(num) {
  if(num === 'a') {
    return 'That is not a number!'
  }


}
}

// numberMagic();
numberMagic(2);
//
//
// numberMagic(3);
// // 9
// // numberMagic(‘a’);
// // ‘That’s not a number!’
//
// numberMagic(8);
// // 16
//
// numberMagic(9)
// 27
