'use strict';

const btn = document.getElementById('omikuji');

btn.addEventListener('click' , function() {
    const result = ['大吉', '中吉', '小吉', '吉', '凶', '大凶'];
    const number = Math.floor(Math.random() * result.length);

    btn.textContent = result[number];
})