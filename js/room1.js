const alpa = document.getElementById("alpa");
const penize = document.getElementById("penize");
const secret = document.getElementById("secret");

let penizecount = parseInt(localStorage.getItem("penizky"));
let playerdmgcount = parseInt(localStorage.getItem("damage"));
let eschupgrade = parseInt(localStorage.getItem("eschupgrade"));
let doutnik = parseInt(localStorage.getItem("doutnik"));
let secrett = parseInt(localStorage.getItem("secrett")) || 0;;
let playerhpcount = parseInt(localStorage.getItem("zivoty"));

parseInt(localStorage.setItem("penizky", penizecount));
parseInt(localStorage.setItem("damage", playerdmgcount));
parseInt(localStorage.setItem("eschupgrade", eschupgrade));
parseInt(localStorage.setItem("doutnik", doutnik));
parseInt(localStorage.setItem("secrett", secrett));
parseInt(localStorage.setItem("zivoty", playerhpcount));
penize.innerHTML = `Peníze: ${penizecount}`;

alpa.onclick = () => {
  if (penizecount >= 500) {
    penizecount -= 500;
    playerdmgcount += 20;
    eschupgrade += 1;
    alpa.style.display = "none";
    text.innerHTML = `Již si svůj damage zvíšil o 20<br> ale stále můžes splnit Eschův tajný quest který ti zvýší hp `;
    parseInt(localStorage.setItem("penizky", penizecount));
    parseInt(localStorage.setItem("damage", playerdmgcount));
    parseInt(localStorage.setItem("eschupgrade", eschupgrade));
  }
};

if (eschupgrade == 1) {  alpa.style.display = "none";
text.innerHTML = `Již si svůj damage zvýšil`;
parseInt(localStorage.setItem("penizky", penizecount));
parseInt(localStorage.setItem("damage", playerdmgcount));
parseInt(localStorage.setItem("eschupgrade", eschupgrade));}

if (doutnik > 0 && eschupgrade == 1 && secrett < 1) {
playerhpcount += 48;
text.innerHTML = `Již si svůj damage i hp zdvojnásobil`;
secret.style.display ="block";
parseInt(localStorage.setItem("damage", playerdmgcount));
parseInt(localStorage.setItem("zivoty", playerhpcount));
secrett += 1;
parseInt(localStorage.setItem("secrett", secrett));

}
