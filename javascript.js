document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".box-derecha");
    let container2 = document.querySelector(".box-izquierda");

    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.classList.add("cuadrado-pequeño");
        container.appendChild(div);
    }

    for (let i = 0; i < 9; i++) {
        let div = document.createElement("div");
        div.classList.add("texto-pequeño");
        container.appendChild(div);
    }

    for (let i = 0; i < 2; i++) {
        let div = document.createElement("div");
        div.classList.add("texto-img");
        container2.appendChild(div);
    }
});