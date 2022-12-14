const key = document.getElementById("key")

let key1count = parseInt(localStorage.getItem("key1count")) || 0;
parseInt(localStorage.setItem("key1count",key1count));
let klic1 = parseInt(localStorage.getItem("klic1")) || 0;
parseInt(localStorage.setItem("klic1", klic1));




key.onclick = () => {
    if (key1count == 0 || klic1 == 0) {
text.innerHTML = "Nemáš všechni části klíče, musíš je nejdřív najít";
        
    }
    if (key1count > 0 && klic1 > 0) {
       background.style.backgroundImage = "url(/img/dooropen.jpg)";
                key.style.display ="none";
                arrowup.style.display ="block";
                text.style.display ="none";
            }

}
