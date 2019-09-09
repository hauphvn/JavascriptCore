//Exercise Shopping cart
var orders = [
    {name: 'A', quality: 1, unitPrice: 10},
    {name: 'B', quality: 2, unitPrice: 20},
    {name: 'C', quality: 3, unitPrice: 30}
];

//Sum of orders
function sumOfPrice(orders) {
    result = 0;
    initialValue = 0;
    if (Array.isArray(orders)) {
        // var total = 0;
        result = orders.reduce(function (total,currentValue) {
            return total + currentValue.unitPrice;
        },initialValue);
    }

    return result;
}

var sum = sumOfPrice(orders);

console.log(sum);

console.log("-----------Ex 01----------------");

// Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    count = 0;
    initialValue = 0;
    if (Array.isArray(arr)){
        count = voters.reduce(function (total, currentValue) {
            if (currentValue.voted === true) {
                total++;
            }
            return total;
        },initialValue);
    }

    console.log(count);
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
totalVotes(voters);// 7

console.log("-----------Ex 02----------------");
// Similar ex 01
console.log("-----------Ex 03----------------");

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    temp = {price: 0};
    if (Array.isArray(arr)){
        temp = arr.reduce(function (a,b) {
            temp.price = a.price + b.price;
            return temp;
        },)
    }

    console.log(temp.price);
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
shoppingSpree(wishlist);// 227005