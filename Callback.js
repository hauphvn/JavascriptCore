//Practicing for myself
Sleep = function () {
    console.log("He is sleeping...")
}

Eat = function (sleep) {
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