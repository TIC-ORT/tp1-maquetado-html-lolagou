document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".box-derecha");
    let container2 = document.querySelector(".box-izquierda");
    let container3 = document.querySelector(".franja-footer");
    let container4 = document.querySelector(".franja-footer");
  


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

    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.classList.add("texto-footer");
        container3.appendChild(div);
    }


    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.classList.add("perfil-footer");
        container4.appendChild(div);
    }

});