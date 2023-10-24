'use strict';

{
    const hour = document.getElementById('hour');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    function countDown() {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const timeDiff = tomorrow.getTime() - now.getTime();

        const calcHour = Math.floor(timeDiff / 1000 / 60 / 60);
        const calcMins = Math.floor(timeDiff / 1000/ 60) % 60;
        const calcSec = Math.floor(timeDiff / 1000) % 60;

        hour.innerHTML = String(calcHour).padStart(2, '0');
        min.innerHTML = String(calcMins).padStart(2, '0');
        sec.innerHTML = String(calcSec).padStart(2, '0');
    }

    countDown();
    setInterval(countDown, 1000);
}