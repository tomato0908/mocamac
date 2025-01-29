const kaiyuu = new Audio('001.mp3');


function musicplay() {
    kaiyuu.play();
    console.log("nowplay")
}

// -----------------------------------------------------------//

const menubar = document.getElementById("menubar");
const body = document.getElementById("body");
console.log(body);
console.log(menubar);

menubar.style.display="none";

function bar() {
    console.log("メニューバー表示中");
    menubar.style.display="block";
    body.classList.add('menuback');

}

function back() {
    menubar.style.display="none";
    body.classList.remove('menuback');
}