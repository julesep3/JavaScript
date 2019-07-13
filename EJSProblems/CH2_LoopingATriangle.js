let i = #;
while (i.length < 8) {
    console.log(i);
    i += #;
}


for (let i = 1; i < 101; i++) {
    if ((i % 3 === 0) && !(i % 5 === 0)) {
        console.log("Fizz");
    } elif((i % 5 === 0) && !(i % 3 === 0)) {
        console.log("Buzz");
    } elif((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    }
    console.log(i);
}



