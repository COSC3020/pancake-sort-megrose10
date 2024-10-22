function flip(array, n) {
    let newArray = [];

    for(let i=0; i<n; i++) {
        newArray.push(array[i]);
    }

    array = unshift(newArray.reverse());

    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {

    let size = array.length();
    for(let i=0;i<size;i++) {
        for(let j=0;i<size-1;j++) {
            if(array[i] > array[j]) {
                array = flip(array, j);
            }
    }
    
    return array;
}

