const playerhp = document.getElementById("playerhp");
const playenemyhpermaxhp = document.getElementById("enemyhp");
const attack = document.getElementById("attack");
const enemyhp = document.getElementById("enemyhp");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const enemy = document.getElementById("enemy");
const doutnikk = document.getElementById("doutnikk");
const player = document.getElementById("player");

let penizecount = parseInt(localStorage.getItem("penizky"));
let playerhpcount = parseInt(localStorage.getItem("zivoty"));
let playerdmgcount = parseInt(localStorage.getItem("damage"));
let playerluckcount = parseInt(localStorage.getItem("luck"));
let doutnik = parseInt(localStorage.getItem("doutnik"));
let enemyhpcount = 335;

parseInt(localStorage.setItem("penizky", penizecount));
parseInt(localStorage.setItem("Damage", playerdmgcount));
parseInt(localStorage.setItem("zivoty", playerhpcount));
parseInt(localStorage.setItem("doutnik", doutnik));
attack.onmousedown = () => {
  if (playerhpcount > 0 && enemyhpcount > 0);
  enemyhpcount -= playerdmgcount;
  player.style.left = "700px";
  enemyhp.innerHTML = `HP: ${enemyhpcount}`;
};
if (enemyhpcount <= 0) {
  penizecount += 200;
  penizecount.setInterval("penizecount", penizecount);
}
attack.onmouseup = () => {
  player.style.left = "300px";
};

const enemyAttackInterval = setInterval(() => {
  playerhpcount -= 7;

  playerhp.innerHTML = `HP: ${playerhpcount}`;
  if (playerhpcount <= 0) {
    clearInterval(enemyAttackInterval);
    text.innerHTML = "Zemřel jsi";
    window.location.href = "/index.html";
  }
  if (enemyhpcount <= 0) {
    doutnikk.style.display = "block";
    arrowdown.style.display = "block";
    clearInterval(enemyAttackInterval);
    doutnik += 1;
    parseInt(localStorage.setItem("doutnik", doutnik));
    penizecount += 70;
    parseInt(localStorage.setItem("penizky", penizecount));
    enemy.style.display = "none";
    enemyhp.style.display = "none";
    player.style.display = "none";
    playerhp.style.display = "none";
    attack.style.display = "none";
    text2.style.display = "block";
   
    text.innerHTML = "Nepřítel utekl, Získal jsi <br>70 korun";
  }
}, 1000);
