function obtenerEdad(fechaNacimiento) {
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    return "Tu edad es ".concat(edad);
}
obtenerEdad(new Date("1996-08-04"));
