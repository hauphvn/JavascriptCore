// Practicing of myself
var rectangles = [
    {width: 10, height: 5},
    {width: 15, height: 6},
    {width: 20, height: 10}
];

var acreages = rectangles.map(function(x){
    return x.width * x.height;
});
console.log(acreages);
console.log("-------Ex 01--------");
// Practicing of CodeX Tokyo
/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 */
// Khai báo tripple function ở đây

function tripple(x){
    return x*3;
}

var numbers = [10, 5, 8];
var trippleNumbers = numbers.map(function(x){
    return tripple(x);
});
console.log(trippleNumbers);

console.log("-------Ex 02--------");
// Make an array of strings of the names
function namesOnly(arr) {
    result = [];
    if (Array.isArray(arr)){
        result = arr.map(function (x) {
            return x.name;
        })
    }
    console.log(result);
}

namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

console.log("-------Ex 03--------");

// Make an array of the names in <h1></h1>, and the ages in <h2></h2>
function readyToPutInTheDOM(arr) {
    result = [];
    if (Array.isArray(arr)){
        result = arr.map(function (x) {
            return "<h1>"+x.name+"</h1><h2>"+x.age+"</h2>";
        })
    }
    console.log(result);
}
readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]