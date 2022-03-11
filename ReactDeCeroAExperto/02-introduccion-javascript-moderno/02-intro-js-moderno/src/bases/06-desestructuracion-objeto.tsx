
const persona = {
    nombre: "gibmyx",
    edad: "26",
    clave: "123456789"
}
const {nombre} = persona

const retornaPersona = ({nombre, edad, clave}:{nombre:string, edad:string, clave:string}) => {
    return {
        nombreClave: nombre,
        anio: edad,
        latlng: {
            lat: 14.123135,
            lng: -12.36547
        }
    }

}

const {nombreClave, anio, latlng:{lat, lng}} = retornaPersona(persona)

console.log(nombreClave, anio, lat, lng)
function App() {}
export default App;
