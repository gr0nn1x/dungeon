const playerhp = document.getElementById("playerhp");
const playenemyhpermaxhp = document.getElementById("enemyhp");
const attack = document.getElementById("attack");
const enemyhp = document.getElementById("enemyhp");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const enemy = document.getElementById("enemy");

let penizecount = parseInt(localStorage.getItem("penizky"));
let playerhpcount =  parseInt(localStorage.getItem("zivoty"));
let playerdmgcount = parseInt(localStorage.getItem("damage"));
let playerluckcount = parseInt(localStorage.getItem("luck"));
let klic1 = parseInt(localStorage.getItem("klic1")) || 0;
let enemyhpcount = 750;


parseInt(localStorage.setItem("penizky",penizecount));
parseInt(localStorage.setItem("Damage", playerdmgcount));
parseInt(localStorage.setItem("zivoty", playerhpcount));
parseInt(localStorage.setItem("klic1", klic1));

attack.onmousedown = () => {
    if (playerhpcount > 0 && enemyhpcount > 0);
    enemyhpcount -= playerdmgcount;
    player.style.left = "700px";
    enemyhp.innerHTML = `HP: ${enemyhpcount}`;
  };
  if (enemyhpcount <= 0) {
    klic1 += 1;
    penizecount += 500;
    parseInt(localStorage.setItem("klic1", klic1));
    penizecount.setInterval("penizecount", penizecount)
  }
  attack.onmouseup = () => {
    player.style.left = "300px";
  };
  
  const enemyAttackInterval = setInterval(() => {
    playerhpcount -= 30;
  
    playerhp.innerHTML = `HP: ${playerhpcount}`;
    if (playerhpcount <= 0) {
      clearInterval(enemyAttackInterval);
      text.innerHTML = "Zemřel jsi";
      window.location.href = "/index.html";
    }
    if (enemyhpcount <= 0) {
      text.innerHTML = "Nepřítel utekl, Získal jsi <br>150 korun";
      text2.innerHTML = "Když Majkl odjížděl upustil půlku klíče!!!<br>Získal jsi: První Půlku klíče";
      arrowdown.style.display ="block";
      
      clearInterval(enemyAttackInterval);
      penizecount += 150;
      klic1 += 1;   
      parseInt(localStorage.setItem("klic1", klic1));
      parseInt(localStorage.setItem("penizky",penizecount));
      enemy.style.display ="none";
      enemyhp.style.display ="none";  
      player.style.display ="none";
      playerhp.style.display ="none";
      attack.style.display ="none";
    
      arrowdown.style.display ="block";
      
    }
  }, 1000);