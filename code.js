function flip(array, n) {
    let newArray = [];

    for(let i=n-1; i>0; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {

    let size = array.length();
    if(size == 0){
        return 0;
    }
    for(let i=0;i<size;i++) {
        for(let j=1;i<size-1;j++) {
            if(array[i] < array[j]) {
                array = flip(array, size);
            }
            if(size<=0){
                size = size - 1;
            }
            else return array;
        }
    }
    
    
}
