function agregarTroca() {
    const marca = document.getElementById("marca").value.trim();
    const modelo = document.getElementById("modelo").value.trim();
    const anio = document.getElementById("anio").value.trim();

    // Validaciones
    if (!marca || !modelo || !anio) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (isNaN(anio) || anio < 1900 || anio > new Date().getFullYear()) {
        alert("Por favor, ingresa un año válido.");
        return;
    }

    // Crear una fila nueva
    const tabla = document.getElementById("tablaTrocas").getElementsByTagName("tbody")[0];
    const nuevaFila = tabla.insertRow();

    const celdaMarca = nuevaFila.insertCell(0);
    const celdaModelo = nuevaFila.inser
