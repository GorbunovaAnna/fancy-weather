// смена фона 

let bodyBg = document.querySelector('body');
let buttonRefreshBg = document.querySelector('.refresh-bg');

let arrBg = ['url("./images/bg3.jpg")', 'url("./images/bg2.jpg")', 'url("./images/bg1.jpg")'];

function refreshBodyBgOnClick() {
    let bg = arrBg[Math.floor(Math.random() * arrBg.length)];
    bodyBg.style.backgroundImage = bg;
}

buttonRefreshBg.addEventListener('click', refreshBodyBgOnClick);

// время

let date = new Date();

const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDate() {
    const dayInWeek = daysInWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${dayInWeek} ${day} ${month}  ${hours}:${minutes}`;
}

const strDate = document.querySelector('.date');
