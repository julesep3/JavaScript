const array = [ 4, 7, 6, 2, 1 ];4

const subTwo = array.map(numb => {
    return numb - 2;
});
console.log(subTwo);

const evenNums = array.filter(num => {
    if ((num%2) === 0) {
        return num;
    } 
})
console.log(evenNums);

const addAll = array.reduce((a, b) => {
    return a + b;
})
console.log(addAll);