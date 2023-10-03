const startstopbtn = document.querySelector('#startstopbutton');
console.log(startstopbtn);
const resetbtn = document.querySelector('#resetBtn')
console.log(resetbtn);
let seconds = 0;
let min = 0;
let hour = 0;
// stop watch function
let leadinghour = 0;
let leadingsecond = 0;
let leadingmin = 0;
function stopwatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        min++;
        if (min / 60 === 1) {
            min = 0;
            hour++;
        }
    }
    if (seconds < 10) {
        leadingsecond = "0" + seconds.toString();
    }
    else {
        leadingsecond = seconds;
    }
    if (min < 10) {
        leadingmin = "0" + min.toString();
    }
    else {
        leadingmin = min;
    }
    if (hour < 10) {
        leadinghour = "0" + hour.toString();
    }
    else {
        leadinghour = hour;
    }
    document.getElementById('timer').innerHTML = leadinghour + ':' + leadingmin + ':' + leadingsecond;
}
window.setInterval(stopwatch, 1000);
