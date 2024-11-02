function flip(array, n) {
    let newArray = [];

    for(let i=n-1; i>0; i--) {
        newArray.push(array[i]);
    }

    return newArray
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let size = array.length;
    do {
      let max = array[0];
      for(let i = 1; i < size; i++) {
        if(max < array[i]) {
          max = array[i];
        }
      }
      //console.log(`${max}`);
      let n = array.indexOf(max);
      if(n == 0) {
        if(size == array.length) {
          flip(array, size + 1)
          size = size - 1;
        }
        else {
        flip(array, size + 1);
        }
      }
      else {
        flip(array, n);
        if(size == array.length) {
          flip(array, size + 1)
          size = size - 1;
        }
        else {
          flip(array, size);
          size = size - 1;
        }
        if(n == 0) {
          flip(array, size + 1);
        }
      size = size - 1;
      }
    }while(size>0);
    return array;
    
}
let aTest = [5, 4, 3, 1, 2];
let newATest = pancakeSort(aTest);
for(let i = 0; i < aTest.length; i++) {
  console.log(`${newATest[i]}`);
}
