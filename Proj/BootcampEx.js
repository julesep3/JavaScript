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
// example.map(e => e%2===0)
console.log(evenNums);

const addAll = array.reduce((a, b) => {
    return a + b;
})
// example.reduce((p , c) => p + c, 0)
console.log(addAll);
