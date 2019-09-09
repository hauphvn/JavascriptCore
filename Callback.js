//Practicing for myself
function Sleep() {
    console.log("He is sleeping...")
}
function Eat(sleep) {
    console.log("He is eating...");
    console.log("He have eaten.");
    sleep();
}
Eat(Sleep);
console.log("---------Practicing of CoderX-----------");
//Practicing of CoderX
/**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách:
 *   countAndDo(sayHello)
 */

function sayHello() {
    console.log("I love Coders.Tokyo")
}

function countAndDo(callback) {
    for (i = 1;i<11;i++){
        console.log(i);
    }
    callback()
}

countAndDo(sayHello);

console.log("-----------Ex 02 ------------");
/**
 * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. Hàm sumAndDo làm nhiệm vụ tính tổng array đó, sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */

function double(num) {
    if (!isNaN(num)){
        console.log(num*2);
    }
}

function sumAndDo(nums, callback) {
    sum = 0;
    if (Array.isArray(nums)){
        for (x of nums){
            sum += x;
        }
        callback(sum);
    }

}

sumAndDo([1, 2, 3], double);

console.log("-----------Ex 03 ------------");
/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */
function transform(numbers, callback) {
    result = [];
    if (Array.isArray(numbers)){
        for (x of numbers){
            result.push(callback(x));
        }
    }
    return result;
}

function double2(num) {
    return num * 2;
}

var output = transform([2, 4, 6], double2);
console.log(output);
// Expect: [4, 8, 12]