
const getUser = (nombre: string) => {
    return [
        nombre,
        () => {console.log(`Hola ${nombre}`)}
    ]
}

const [nombre, setNombre] = getUser("Gimbyx")
console.log(nombre)
// setNombre()

function App() {}
export default App;
