let table = document.getElementById("dinamicTable");
console.log(table);

function Crear() {
    console.log("metodo crear");
    table.border = "1";
    table.style.margin = "auto";
    table.style.marginTop = "30px";
    
    //Crear encabezado
    let nombresColumnas = [
        "Nombre", 
        "Apellido", 
        "Telefono", 
        "Eliminar"
    ];
    let row = table.insertRow(0);
    for ( let i = 0; i < nombresColumnas.length; i++){
        let celdaEncabezado = document.createElement("th");
        celdaEncabezado.innerText = nombresColumnas[i];
        row.appendChild(celdaEncabezado);
    }

    document.getElementById("btnCrear").disabled = true;
    document.getElementById("btnAgregar").disabled = false;
    document.getElementById("btnLimpiar").disabled = false;
    document.getElementById("nombre").disabled = false;
    document.getElementById("apellido").disabled = false;
    document.getElementById("telefono").disabled = false;
}

function AgregarUsr() {
    console.log("metodo agregar");
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    console.log(nombre, apellido, telefono);

    let nuevoUsuario = new Usuario(nombre, apellido, telefono);
    console.log(nuevoUsuario);
    
    dibujarEnTabla(nuevoUsuario);
}

function dibujarEnTabla(usuario) {
    let row = table.insertRow(-1);
    let usuarioEnArreglo = Object.values(usuario);
    console.log(usuarioEnArreglo);
    for ( let i = 0; i < usuarioEnArreglo.length; i++){
        let celda = row.insertCell(-1);
        celda.innerHTML = usuarioEnArreglo[i];
    }
    let celdaEliminar = row.insertCell(-1);
    celdaEliminar.innerHTML = `<button onclick="eliminarUsr">Eliminar</button>`;
}

class Usuario {
    constructor(username, lastname, tel) {
        this.username = username;
        this.lastname = lastname;
        this.telefono = tel;
    }
}

function Limpiar() {
    console.log("metodo limpiar");
    table.innerHTML = "";
    document.getElementById("btnCrear").disabled = false;
    document.getElementById("btnAgregar").disabled = true;
    document.getElementById("btnLimpiar").disabled = true;
    document.getElementById("nombre").disabled = true;
    document.getElementById("apellido").disabled = true;
    document.getElementById("telefono").disabled = true;
}
