//Exercise on clip
var items = ['Tom', 'Bill', 'Kim'];

var result = items.reduce(function (left, item) {
    return left + '<' + item + '>';
}, '');

console.log(result);

// -------Ex 01------------
console.log("-------Ex 01------------");

// Given an array of arrays, flatten them into a single array
function flatten(arr) {
    array = arr.reduce(function (a, b) {
        temp = [];
        for (x of b) {
            temp.push(x);
        }
        return a.concat(temp)
    }, []);

    console.log(array);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays); // ["1", "2", "3", true, 4, 5, 6];

// ---------------Ex 02---------------
console.log(" ---------------Ex 02---------------");

// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
    obj = {};
    cout = arr.reduce(function (a, b) {
        if (!obj.hasOwnProperty(b)) {
            Object.defineProperty(obj,b,{value: 1, writable: true});
        } else {
            numCur = obj[b]  + 1;
            obj[b] = numCur;
        }
        return b;
    }, '');
    console.log(obj);
}

countOccurrences(['a', 'b', 'c', 'b', 'a']);
// {
//   a: 2,
//   b: 2,
//   c: 1
// }
