const data = require('./class-2-data.json')

/*
const maleAges = data
    .filter(e => e.sex ==="M")
    .map(e => e.age)

const femaleAges = data
    .filter(e => e.sex === "F")
    .map(e => e.age)
*/

function summarize (sex, filter) {
    const ages = data
        .filter(e => e.sex === filter)
        .map(e => e.age)
    const avgAgeCalc = averageAge(ages)
    console.log(`Average ${sex} age: `, Math.round(avgAgeCalc))
}

function averageAge(col) {
    const sum = col.reduce((p,c)=> p+c)
    const totalItems = col.length;

    return sum / totalItems
}

summarize("male", "M")
summarize("female", "F")

/*
const males = data.filter(word => word.sex === 'M')
const females = data.filter(word => word.sex === 'F')

const maleAges = males.map(e => e.age)
const femaleAges = females.map(e => e.age)

const avgMaleAge = averageAge(maleAges)
const avgFemaleAge = averageAge(femaleAges)

function averageAge(col) {
    const sum = col.reduce((p,c)=> p+c)
    const totalItems = col.length;

    return sum / totalItems
}


console.log('+++++++++++++++++++++')
console.log(males);
console.log(females);
console.log('+++++++++++++++++++++')
console.log(maleAges);
console.log(femaleAges);
console.log('+++++++++++++++++++++')
console.log(Math.floor(avgFemaleAge));
console.log(Math.floor(avgMaleAge));
console.log('+++++++++++++++++++++')
*/