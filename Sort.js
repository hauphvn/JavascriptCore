// ------Ex 01--------
console.log("------ex 01--------");

/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự từ nhỏ đến lớn (ascending order)
 */
function sortNumbers(arr) {
    var ascendingNumbers = arr.sort(function (a, b) {
        return a-b;
    });
    console.log(ascendingNumbers);
}

sortNumbers([5, 1, 3, 2]); // [1, 2, 3, 5]

// ------Ex 02--------
console.log("------ex 02--------");

/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
 */
function sortNumbers2(arr) {
    var descendingNumbers = arr.sort(function (a,b) {
        return b - a;
    });
    console.log(descendingNumbers);
}

sortNumbers2([5, 1, 3, 2]); // [5, 3, 2, 1]

// ------Ex 03--------
console.log("------ex 03--------");

/**
 * Sort an array from shortest string to longest
 */
function lengthSort(arr) {
    var sortedShortToLong = arr.sort(function (a,b) {
        return a.length - b.length;
    });
    console.log(sortedShortToLong);
}

lengthSort(["dog", "wolf", "by", "family", "eaten"]);
// ["by", "dog", "wolf", "eaten", "family"]
// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length

// ------Ex 04--------
console.log("------ex 04--------");

// Sort an array alphabetically
function alphabetical(arr) {
    var sortedByAlphabet = arr.sort();
    console.log(sortedByAlphabet);
}

alphabetical(["dog", "wolf", "by", "family", "eaten"]);
// ["by", "dog", "eaten", "family", "wolf"]

// ------Ex 05--------
console.log("------ex 05--------");

// Sort the objects in the array by age
function byAge(arr){
    var sortedByAge = arr.sort(function (a, b) {
        return a.age - b.age;
    });
    console.log(sortedByAge);
}

byAge([
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]);

// ------Ex 06--------
console.log("------ex 06--------");

/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 */
var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
];

/**
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
function getTopStudents(students) {
    var sortedByScore = students.sort(function (a,b) {
        return b.score - a.score;
    });

    var tops = sortedByScore.slice(0,3);
    console.log(tops);
}

/**
 * Chạy thử hàm
 */
getTopStudents(students);