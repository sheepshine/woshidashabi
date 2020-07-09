const Arr = new Array();
let Swimming = [];
const SwimmingAllArr = [];
let SwimmingBook = {};

add();
for (let i = 0; i < Arr.length; i++) {
  for (let j = 0; j < Arr.length; j++) {
    for (let k = 0; k <= 2; k++) {
      Swimming = [];
      swimming(i, j, k);
    }
    
  }
}


// Swimming = [];
// swimming(0, 0);
// console.log(Swimming);

// Swimming = [];
// swimming(0, 1);
// console.log(Swimming);

// Swimming = [];
// swimming(0, 2);
// console.log(Swimming);

function add() {
  for (let i = 0; i < 10; i++) {
    Arr.push(i);
  }
}

function swimming(init, index, key) {
  const startIndex = init + index + 1;
  if (startIndex + 2 > Arr.length) {
    return
  }
  Swimming[key] = init;
  for (let i = startIndex; i < Arr.length; i++) {
    if (Swimming.length > 2) {
      console.log(Swimming);
      SwimmingAllArr.push(Swimming)
      break;
    } else {
      Swimming.push(Arr[i]);
      SwimmingBook[i] = true;
      swimming(i + 1);
    }
  }
}
