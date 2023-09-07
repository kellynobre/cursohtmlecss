const circulo = document.querySelector("#circulo");

//Na função mude as propriedades top e left do círculo com base no mouse.
// Você pode usar elemento.style.propriedade para mudar o CSS diretamente.
function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

//Adicione ao window uma função que ocorre ao "mousemove";
window.addEventListener("mousemove", seguirMouse);
