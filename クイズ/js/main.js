'use strict';
let question = [
    [
        "山形県の県庁所在地はどこ？",
        "1.天皇市",
        "2.東根市",
        "3.山形市",
        "3"
    ], 
    [
        "山形県のお米と言えば？",
        "1.ひとめぼれ",
        "2.ほえぬき",
        "3.こしひかり",
        "2"
    ], 
    [
        "山形県の果物と言えば？",
        "1.さくらんぼ",
        "2.マンゴー",
        "3.みかん",
        "1"
    ]
];

let quiz = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');

let correct = 0;
let quizCount = 0;

function quizSet() {
    quiz.textContent = question[quizCount][0];
    ans1.textContent = question[quizCount][1];
    ans2.textContent = question[quizCount][2];
    ans3.textContent = question[quizCount][3];
}

quizSet();
function answerCheck(ans) {
    if(ans == question[quizCount][4]) {
        alert("正解！！");
        correct++;
    }else {
        alert("不正解、、、");
    }
    quizCount++;
    if(quizCount == question.length) {
        quiz.textContent = "正解数は" + correct + "でした！";
        ans1.textContent = "";
        ans2.textContent = "";
        ans3.textContent = "";
        document.getElementById('answer1').style = "opacity: 0; pointer-events: none;";
        document.getElementById('answer2').style = "opacity: 0; pointer-events: none;";
        document.getElementById('answer3').style = "opacity: 0; pointer-events: none;";
    } else {
        quizSet();
    }
}
