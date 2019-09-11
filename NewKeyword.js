var tom = {
    name: 'Tom',
    stomach: [],
    eat: function (mouse) {
        this.stomach.push(mouse);
        return this;
    }
}

//Creating a new mouse without using 'new' keyword
var m1 = {name: 'm1'};
var m2 = {name: 'm2'};
var m3 = {name: 'm3'};

//Creating a new mouse by using 'new' keyword
function Mouse(jerry) {
    this.name = jerry;

}

var m11 = new Mouse('m11');
var m22 = new Mouse('m22');
var m33 = new Mouse('m33');

tom.eat(m1).eat(m2).eat(m3).eat(m11).eat(m22).eat(m33);
console.log(tom);
//
// console.log(tom);

// ==============Practicing on CoderX=============
// -------Ex 0--------------
console.log('----------Ex 0--------------');
/*
  Tạo một đối tượng student có thông tin như sau:
  Tên: Herry,
  Giới tính: Nam,
  Tuổi: 18

  Viết hàm showInfo để in ra các thông tin của đối tượng đó.
*/

var student = {
    name:'Herry',
    gender: 'Nam',
    age: 18
};

function showInfo(obj) {
    console.log("Name: "+obj.name);
    console.log("Gender: "+obj.gender);
    console.log("Age: "+obj.age);
}

showInfo(student); // In ra tất cả thông tin của đối tượng

// -------Ex 02--------------
console.log('----------Ex 02--------------');
/*
  viết hàm updateObj để xóa thuộc tính rollno khỏi đối tượng student
  và in ra kết quả
*/

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

function updateObj() {
    delete   student.rollno;
    console.log(student);
}

updateObj();
/*
    var student = {
      name : "David Rayy",
      sclass : "VI",
    };
*/
// -------Ex 03--------------
console.log('----------Ex 03--------------');
/*
  Viết hàm lengthObj để in ra độ dài của một đối tượng
*/

function lengthObj(obj) {
    console.log("length: "+Object.keys(obj).length);
}

var student = {
    name: "Jerry",
    age: 14,
    role: "student"
}

lengthObj(student); // length: 3

// -------Ex 04--------------
console.log('----------Ex 04--------------');
/*
  Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
    {
      color: String,
      shape: String,
      fill: boolean
    }
*/

function Shape(color, shape, fill) {
    this.color = color;
    this.shape = shape;
    this.fill = fill;
}

var shape1 = new Shape("red", "rectangle", true);
var shape2 = new Shape("orange", "triangle", false);
var shape3 = new Shape("tomato", "circle", true);

console.log(shape1, shape2, shape3);
/*
  Shape { color: 'red', shape: 'rectangle', fill: true }
  Shape { color: 'orange', shape: 'triangle', fill: false }
  Shape { color: 'tomato', shape: 'circle', fill: true }
*/