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
    return array;
}

