
const arreglo:any[] = [10,20,30,40]
console.log(arreglo)

let arreglo2 = [...arreglo, 50]

const arreglo3 = arreglo2.map(val => val * 2);


console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)

function App() {}
export default App;
