function myClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    
    m = checkTime(m);
    s = checkTime(s);

let final = `${h}:${m}:${s}`;

document.getElementById("text").innerHTML = final;

    if (h < 12) {
        document.getElementById("am").innerHTML = "Am";
    }else if (h > 12) {
        document.getElementById("am").innerHTML = "Pm";
    }

}
setInterval(myClock, 1000);



function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}






let hand = document.getElementsByClassName("hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90
  hand[2].style.transform = `rotate(${secondsDegrees}deg)` 
  

   const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  hand[1].style.transform = `rotate(${minsDegrees}deg)`;
  
const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hand[0].style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(setDate, 1000);


let d = new Date()

let ye = d.getFullYear()
let mo = d.getMonth()+1
let da = d.getDate()

document.getElementById("date").innerHTML = `${ye}/${mo}/${da}`

console.log("2023/2/28")
