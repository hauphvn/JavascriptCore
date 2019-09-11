// --------Ex 01--------------
console.log("-----------Ex 01-------------");
/*
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
    var arrayPow = [];
    for (x of arr){
        if (x % 2 == 0){
            x = Math.pow(x,2);
            arrayPow.push(x);
        }else{
            arrayPow.push(x);
        }
    }
    console.log(arrayPow);
}

powerup([0, 3, 6, 7, 4]); // [0, 3, 36, 7, 16]

// --------Ex 2--------------
console.log("-----------Ex 2-------------");
/*
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {
    var result = 0;
    for (x of arr){
        result += x;
    }
    result = result/arr.length;
    result = Math.ceil(result);
    console.log(result);
}

average([8, 8 , 6.75]) // 8

// --------Ex 03--------------
console.log("-----------Ex 03-------------");
/*
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.

  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
    var result = [];
    for (x of arr){
        if (x < 0){
            result.push(Math.abs(x));
        }else{
            result.push(x);
        }
    }
    console.log(result);
}

positiveNumber([-2, 3, -4, -7, 10]); // [ 2, 3, 4, 7, 10 ]

// --------Ex 4--------------
console.log("-----------Ex 04-------------");
/*
  Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100
*/

function random() {
    console.log(Math.random()*101 + 1);
}

random(); // The number between 1 and 100

// --------Ex 05--------------
console.log("-----------Ex 05-------------");
/*
  Viết hàm rightTriangle để kiểm tra 3 cạnh của một tam giác và cho biết đó có phải là tam giác vuông hay không?
    Nếu có thì in ra "Yes"
    Không thì in ra "No"
*/

function rightTriangle(a, b, c) {

    if (Math.pow(a,2) === Math.pow(b,2) + Math.pow(c,2) ||
        Math.pow(b,2) === Math.pow(a,2) + Math.pow(c,2)  ||
        Math.pow(c,2) === Math.pow(a,2) + Math.pow(b,2) ) {
        console.log("Yes");
    }else{
        console.log("No");
    }
}

rightTriangle(3, 4, 5); // "Yes"

rightTriangle(1, 2, 3); // "No"

// --------Ex 06--------------
console.log("-----------Ex 06-------------");
/*
  Viết hàm circleMachine() tính chu vi và diện tích hình tròn khi biết bán kính
*/

function circleMachine(r) {
    console.log("Chu vi: "+ (Math.PI * r*2).toFixed(2));
    console.log("Dien tich: "+ (Math.PI * Math.pow(r,2)).toFixed(2));
}

circleMachine(3);
// Chu vi: 18.85
// Diện tích: 28.27

// --------Ex 07--------------
console.log("-----------Ex 07-------------");
/*
  Viết hàm trigonim để in ra 3 giá trị sin cos tan của một số nhập vào
*/

function trigonim(number) {
    console.log("Sin("+number+") = "+ (Math.sin(number)).toFixed(3));
    console.log("Cos("+number+") = "+ (Math.cos(number)).toFixed(3));
    console.log("Tan("+number+") = "+ (Math.tan(number)).toFixed(3));

}

trigonim(45);
// Sin(45) = 0.850
// Cos(45) = 0.525
// Tan(45) = 1.619


