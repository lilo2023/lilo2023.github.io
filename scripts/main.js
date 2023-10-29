let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/firefox-icon.png") {
    miImage.setAttribute("src", "images/mono3.png");
  } else {
    miImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
    }
  };
  
if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
  };

  miBoton.onclick = function () {
    estableceNombreUsuario();
  };