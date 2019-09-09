Sleep = function () {
    console.log("He is sleeping...")
}

Eat = function (sleep) {
    console.log("He is eating...");
    console.log("He have eaten.");
    sleep();
}

Eat(Sleep);