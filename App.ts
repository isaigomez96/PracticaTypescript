


function obtenerEdad(fechaNacimiento: Date): string{
    const hoy = new Date();
    const edad = hoy.getFullYear()- fechaNacimiento.getFullYear();


    return `Tu edad es ${edad}`;
} 

obtenerEdad(new Date("1996-08-04"));