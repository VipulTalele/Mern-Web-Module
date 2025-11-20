function transformToObjects(numberArray) {
    return numberArray.map(num => ({ val: num }));
}

// Test:
console.log(transformToObjects([1, 2, 3]));
