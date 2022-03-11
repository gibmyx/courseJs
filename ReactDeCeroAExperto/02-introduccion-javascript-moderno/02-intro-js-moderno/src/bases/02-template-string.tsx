function App() {}

//template string
const nombre = "Gibmyx"
const apellido = "Gomez"

const nombreComplreto = `${nombre} ${apellido}`
console.log(nombreComplreto)

function getSaludo(nombre: string) {
    return 'Hola ' + nombre
}
console.log(`Este es un texto ${getSaludo(nombre)}`)

export default App;
