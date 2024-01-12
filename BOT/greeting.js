console.log("greeting module");
//for (let i = 1; i <= 100; i++) console.log(i);
let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function(name) {
    let hour = currentDate.getHours();
    if (hour > 16)
        return "Добрый вечер, " + name;
    else if (hour > 10)
        return "Добрый день, " + name;
    else return "Доброе утро, " + name;
}

module.exports.name = "Alice";