document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".box-derecha");

    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.classList.add("cuadrado-pequeño");
        container.appendChild(div);
    }
});