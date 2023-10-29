let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/danilo-susana.jpeg") {
    miImage.setAttribute("src", "images/catita-dog.jpg");
  } else {
    miImage.setAttribute("src", "images/danilo-susana.jpeg");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
function estableceNombreUsuario() {
    let miNombre = prompt("Sabías que Danilo te ama?");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = miNombre + ", Danilo te ama mucho";
    }
  };
  
if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = nombreAlmacenado + ", Danilo te ama mucho";
  };

  miBoton.onclick = function () {
    estableceNombreUsuario();
  };
