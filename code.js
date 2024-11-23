function flip(array, n) {
    //console.log(array[0]);
    //console.log(array[2]);
    for(let i = 0; i < (n - 1); i++) {
      let tmp = array[i];
      //console.log(tmp + "tmp1");
      array[i] = array[i+1];
      //console.log(array[first++]);
      //console.log(array[0]);
      //console.log(tmp + "tmp2");
      array[i+1] = tmp;
      //console.log(tmp);
      //console.log(array[first++] + "test");
    }

    return array;
}
//let array = [1,2,3,4];
//console.log(flip(array, 2));
//Use only flip() here to manipulate the array
function pancakeSort(array) {
  let size = array.length;
  let max = 0;
  while(size > 1) {
    for(let i = 1; i < size; i++) {
      if(array[i] > array[max]) {
        max = i;
      }
    }
    if(max == 0) {
      array = flip(array, size);
    }
    else {
      array = flip(array, max + 1);
      array = flip(array, size);
    }
    size--;
  }
  return array;
}
//let aTest = [5, 4, 3, 1, 2];
//let newATest = pancakeSort(aTest);
//console.log(pancakeSort(aTest));
