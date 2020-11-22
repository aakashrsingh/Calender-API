const d = new Date();

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const D = {
    date: d.getDate(),
    month: month[d.getMonth()],
    year: d.getFullYear(),
    hour: d.getHours(),
    minute: d.getMinutes(),
    seconds: d.getSeconds(),
    day: day[d.getDay()]
};

module.exports= D;