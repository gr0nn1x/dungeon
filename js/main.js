const penize = document.getElementById("penize");
const playermaxhp = document.getElementById("playermaxhp");
const playerdmg = document.getElementById("playerdmg");
const playerluck = document.getElementById("playerluck");
const hat1 = document.getElementById("hat1");
const hat2 = document.getElementById("hat2");
const hat3 = document.getElementById("hat3");
const hat4 = document.getElementById("hat4");
const hat5 = document.getElementById("hat5");
const hat6 = document.getElementById("hat6");
const weapon1 = document.getElementById("weapon1");
const weapon2 = document.getElementById("weapon2");
const weapon3 = document.getElementById("weapon3");
const weapon4 = document.getElementById("weapon4");
const weapon5 = document.getElementById("weapon5");
const weapon6 = document.getElementById("weapon6");
const weapon7 = document.getElementById("weapon7");

let hat1count = parseInt(localStorage.getItem("hat1")) || 0;
let hat2count = parseInt(localStorage.getItem("hat2")) || 0;
let hat3count = parseInt(localStorage.getItem("hat3")) || 0;
let hat4count = parseInt(localStorage.getItem("hat4")) || 0;
let hat5count = parseInt(localStorage.getItem("hat5")) || 0;
let hat6count = parseInt(localStorage.getItem("hat6")) || 0;
let weapon1count = parseInt(localStorage.getItem("weapon1")) || 0;
let weapon2count = parseInt(localStorage.getItem("weapon2")) || 0;
let weapon3count = parseInt(localStorage.getItem("weapon3")) || 0;
let weapon4count = parseInt(localStorage.getItem("weapon4")) || 0;
let weapon5count = parseInt(localStorage.getItem("weapon5")) || 0;
let weapon6count = parseInt(localStorage.getItem("weapon6")) || 0;
let weapon7count = parseInt(localStorage.getItem("weapon7")) || 0;
let weapon8count = parseInt(localStorage.getItem("weapon8")) || 0;
let penizecount = parseInt(localStorage.getItem("penizky")) || 0;
let playerhpcount = parseInt(localStorage.getItem("zivoty")) || 10;
let playerdmgcount = parseInt(localStorage.getItem("damage")) || 1;
let playerluckcount = parseInt(localStorage.getItem("luck")) || 1;
let eschupgrade = parseInt(localStorage.getItem("eschupgrade")) || 0;
let doutnik = parseInt(localStorage.getItem("doutnik")) || 0;

parseInt(localStorage.setItem("penizky", penizecount));
parseInt(localStorage.setItem("zivoty", playerhpcount));
parseInt(localStorage.setItem("damage", playerdmgcount));
parseInt(localStorage.setItem("luck", playerluckcount));
parseInt(localStorage.setItem("hat1", hat1count));
parseInt(localStorage.setItem("hat2", hat2count));
parseInt(localStorage.setItem("hat3", hat3count));
parseInt(localStorage.setItem("hat4", hat4count));
parseInt(localStorage.setItem("hat5", hat5count));
parseInt(localStorage.setItem("hat6", hat6count));
parseInt(localStorage.setItem("weapon1", weapon1count));
parseInt(localStorage.setItem("weapon2", weapon2count));
parseInt(localStorage.setItem("weapon3", weapon3count));
parseInt(localStorage.setItem("weapon4", weapon4count));
parseInt(localStorage.setItem("weapon5", weapon5count));
parseInt(localStorage.setItem("weapon6", weapon6count));
parseInt(localStorage.setItem("weapon7", weapon7count));
parseInt(localStorage.setItem("weapon8", weapon8count));
parseInt(localStorage.setItem("eschupgrade", eschupgrade));
parseInt(localStorage.setItem("doutnik", doutnik));

penize.innerHTML = `Peníze: ${penizecount}`;
playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
playerluck.innerHTML = `Štěstí: ${playerluckcount}`;


hat1.onclick = () => {
  if (penizecount >= 20) {
    penizecount -= 20;
    playerhpcount += 5;
    hat1count += 1;
    hat1.style.display = "none";
    penize.innerHTML = `Peníze: ${penizecount}`;
    playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
    playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
    playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
    parseInt(localStorage.setItem("penizky", penizecount));
    parseInt(localStorage.setItem("zivoty", playerhpcount));
    parseInt(localStorage.setItem("damage", playerdmgcount));
    parseInt(localStorage.setItem("hat1", hat1count));
  }
};
if (hat1count == 1) {
  hat1.style.display = "none";
  parseInt(localStorage.setItem("hat1", hat1count));
}

hat2.onclick = () => {
    if (penizecount >= 50) {
      penizecount -= 50;
      playerhpcount += 7;
      hat2count += 1;
      hat2.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("zivoty", playerhpcount));
      parseInt(localStorage.setItem("hat2", hat2count));
    }
  };
  if (hat2count == 1) {
    hat2.style.display = "none";
    parseInt(localStorage.setItem("hat2", hat2count));
  }
  hat3.onclick = () => {
    if (penizecount >= 100) {
      penizecount -= 100;
      playerhpcount += 10;
      hat3count += 1;
      hat3.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("zivoty", playerhpcount));
      parseInt(localStorage.setItem("hat3", hat3count));
    }
  };
  if (hat3count == 1) {
    hat3.style.display = "none";
    parseInt(localStorage.setItem("hat3", hat3count));
  }
  hat4.onclick = () => {
    if (penizecount >= 200) {
      penizecount -= 200;
      playerhpcount += 15;
      hat4count += 1;
      hat4.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("zivoty", playerhpcount));
      parseInt(localStorage.setItem("hat4", hat4count));
    }
  };
  if (hat4count == 1) {
    hat4.style.display = "none";
    parseInt(localStorage.setItem("hat4", hat4count));
  }
  hat5.onclick = () => {
    if (penizecount >= 500) {
      penizecount -= 500;
      playerhpcount += 23;
      hat5count += 1;
      hat5.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("zivoty", playerhpcount));
      parseInt(localStorage.setItem("hat5", hat5count));
    }
  };
  if (hat5count == 1) {
    hat5.style.display = "none";
    parseInt(localStorage.setItem("hat5", hat5count));
  }
  hat6.onclick = () => {
    if (penizecount >= 1000) {
      penizecount -= 1000;
      playerhpcount += 30;
      hat6count += 1;
      hat6.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("zivoty", playerhpcount));
      parseInt(localStorage.setItem("hat6", hat6count));
    }
  };
  if (hat6count == 1) {
    hat6.style.display = "none";
    parseInt(localStorage.setItem("hat6", hat6count));
  }
  weapon1.onclick = () => {
    if (penizecount >= 10) {
      penizecount -= 10;
      playerdmgcount += 1;
      weapon1count += 1;
      weapon1.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("damage", playerdmgcount));
      parseInt(localStorage.setItem("weapon1", weapon1count));
    }
  };
  if (weapon1count == 1) {
    weapon1.style.display = "none";
    parseInt(localStorage.setItem("weapon1", weapon1count));
  }
  weapon2.onclick = () => {
    if (penizecount >= 30) {
      penizecount -= 30;
      playerdmgcount += 3;
      weapon2count += 1;
      weapon2.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("damage", playerdmgcount));
      parseInt(localStorage.setItem("weapon2", weapon2count));
    }
  };
  if (weapon2count == 1) {
    weapon2.style.display = "none";
    parseInt(localStorage.setItem("weapon2", weapon2count));
  }
  weapon3.onclick = () => {
    if (penizecount >= 70) {
      penizecount -= 70;
      playerdmgcount += 6;
      weapon3count += 1;
      weapon3.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("damage", playerdmgcount));
      parseInt(localStorage.setItem("weapon3", weapon3count));
    }
  };
  if (weapon3count == 1) {
    weapon3.style.display = "none";
    parseInt(localStorage.setItem("weapon3", weapon3count));
  }
  weapon4.onclick = () => {
    if (penizecount >= 120) {
      penizecount -= 120;
      playerdmgcount += 10;
      weapon4count += 1;
      weapon4.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("damage", playerdmgcount));
      parseInt(localStorage.setItem("weapon4", weapon4count));
    }
  };
  if (weapon4count == 1) {
    weapon4.style.display = "none";
    parseInt(localStorage.setItem("weapon4", weapon4count));
  }
  weapon5.onclick = () => {
    if (penizecount >= 200) {
      penizecount -= 200;
      playerdmgcount += 16;
      weapon5count += 1;
      weapon5.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("damage", playerdmgcount));
      parseInt(localStorage.setItem("weapon5", weapon5count));
    }
  };
  if (weapon5count == 1) {
    weapon5.style.display = "none";
    parseInt(localStorage.setItem("weapon5", weapon5count));
  }
  weapon6.onclick = () => {
    if (penizecount >= 350) {
      penizecount -= 350;
      playerdmgcount += 25;
      weapon6count += 1;
      weapon6.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("damage", playerdmgcount));
      parseInt(localStorage.setItem("weapon6", weapon6count));
    }
  };
  if (weapon6count == 1) {
    weapon6.style.display = "none";
    parseInt(localStorage.setItem("weapon6", weapon6count));
  }
  weapon7.onclick = () => { 
    if (penizecount >= 800) {
      penizecount -= 800;
      playerdmgcount += 40;
      weapon7count += 1;
      weapon7.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("damage", playerdmgcount));
      parseInt(localStorage.setItem("weapon7", weapon7count));
    }
  };
  if (weapon7count == 1) {
    weapon7.style.display = "none";
    parseInt(localStorage.setItem("weapon7", weapon7count));
  }
  weapon8.onclick = () => {
    if (penizecount >= 1500) {
      penizecount -= 1500;
      playerdmgcount += 69;
      weapon8count += 1;
      weapon8.style.display = "none";
      penize.innerHTML = `Peníze: ${penizecount}`;
      playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
      playerdmg.innerHTML = `Damage: ${playerdmgcount}`;
      playerluck.innerHTML = `Štěstí: ${playerluckcount}`;
      parseInt(localStorage.setItem("penizky", penizecount));
      parseInt(localStorage.setItem("damage", playerdmgcount));
      parseInt(localStorage.setItem("weapon8", weapon8count));
    }
  };
  if (weapon8count == 1) {
    weapon8.style.display = "none";
    parseInt(localStorage.setItem("weapon8", weapon8count));
  }