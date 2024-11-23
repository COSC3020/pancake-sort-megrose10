function flip(array, n) {
    //console.log(array[0]);
    //console.log(array[2]);
    for(let first = 0; first < (n - 1); first++) {
      let tmp = array[first];
      //console.log(tmp + "tmp1");
      array[first] = array[first+1];
      //console.log(array[first++]);
      //console.log(array[0]);
      //console.log(tmp + "tmp2");
      array[first+1] = tmp;
      //console.log(tmp);
      //console.log(array[first++] + "test");
    }

    return array;
}
//let array = [1,2,3,4];
//console.log(flip(array, 2));
//Use only flip() here to manipulate the array
function pancakeSort(array) {
  let max = 0;
  for(let i = array.length; i > 1; i--) {
    for(let j = 0; j < i; j++) {
      if(array[j] > array[max]) {
        max = j;
      }
    }
    if(max == 0) {
      array = flip(array, i);
    }
    else {
      array = flip(array, max + 1);
      array = flip(array, i);
    }
  }
  return array;
}
//let aTest = [1, 2, 0]
//let aTest = [5, 4, 3, 1, 2];
//let newATest = pancakeSort(aTest);
//console.log(pancakeSort(aTest)); 
