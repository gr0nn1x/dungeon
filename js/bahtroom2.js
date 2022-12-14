const key = document.getElementById("key");

let key1count = parseInt(localStorage.getItem("key1count")) || 0;

parseInt(localStorage.setItem("key1count",key1count));


key2.onclick = () => {
key1count += 1;
key2.style.display ="none";
text.innerHTML = `Získal jsi Druhou půlku klíče!!`;
parseInt(localStorage.setItem("key1count",key1count));
}
if (key1count >= 1) {
    key2.style.display ="none";
    text.innerHTML = `Získal jsi Druhou půlku klíče!!`;

}   