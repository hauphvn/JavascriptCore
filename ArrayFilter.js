
console.log("---------Ex 01------------");

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    result = [];
    if (Array.isArray(arr)){
        result = arr.filter(function (x) {
            return x >= 5;
        })
    }
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
console.log(fiveAndGreaterOnly([1, 5, 5]));

//(fiveAndGreaterOnly([3, 6, 8, 2]))
// fiveAndGreaterOnly([1, 5, 5])

console.log("---------Ex 02------------");

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    result = [];
    if (Array.isArray(arr)){
        result = arr.filter(function (x) {
            return x%2 === 0;
        })
    }
    return result;
}
console.log(evensOnly([3, 6, 8, 2]));
console.log(evensOnly([1, 5, 5]));
// evensOnly([3, 6, 8, 2])
// evensOnly([1, 5, 5])

console.log("---------Ex 03------------");

// Given a list of students, filter out the famale ones
function filterOutFemales(members) {
    result = [];
    if (Array.isArray(members)){
        result = members.filter(function (x) {
            return x.gender !=="female";
        })
    }
    return result;
}

var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];
var notFemale = filterOutFemales(members);
console.log(notFemale);
// expect(filterOutFemales(members)).to.eql(
//     [
//         { name: 'Trung', gender: 'male' },
//         { name: 'Peter', gender: 'gay' }
//     ]
