const botton = document.getElementById("btn");
const box = document.getElementById("caja");


//cambia de color las letras 
function changeColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    caja.style.backgroundColor = color;
}

botton.addEventListener("click", changeColor);
