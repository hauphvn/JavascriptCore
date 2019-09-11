// --------Ex 01-----------
console.log("-------------Ex 01---------------");

/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "Coders Tokyo".
*/

function Student(name, level) {
    this.name = name;
    this.level = level;
}
Student.prototype.school = 'Coders Tokyo';

var student1 = new Student("Herry", "01");
var student2 = new Student("Nancy", "02");

console.log(
    student1, student1.school,
    student2, student2.school,
);

/*
  Student { name: 'Herry', level: '01' } 'Coders Tokyo'
  Student { name: 'Nancy', level: '02' } 'Coders Tokyo'
*/


// --------Ex 02-----------
console.log("-------------Ex 02---------------");
/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn.
    average là thuộc tính dùng chung.
*/

function Student(diemToan, diemLy, diemHoa) {
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
}
Student.prototype.average = function () {
    return Math.round((this.diemHoa + this.diemToan + this.diemLy)/3);
}
var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);

console.log(student1.average()); // 7
console.log(student2.average()); // 8