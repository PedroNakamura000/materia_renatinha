function mudarCor() {

    const titulo = document.querySelector(".hero h2");

    if(titulo.style.color === "yellow"){
        titulo.style.color = "white";
    } else {
        titulo.style.color = "yellow";
    }

}