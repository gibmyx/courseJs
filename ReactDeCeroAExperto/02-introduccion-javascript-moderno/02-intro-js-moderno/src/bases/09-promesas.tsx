import {getHeoreById} from "./08-import-&-export";

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(getHeoreById(2))
    }, 2000)
})
promesa.then((response) => {
    console.log(response)
})

const getHeroeByIdAsync = ((id: number) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeoreById(id)
            if (heroe) {
                resolve(getHeoreById(id))
            }else {
                reject("No se a encontrado un heroe")
            }
        }, 2000)
    })
})
getHeroeByIdAsync(44)
    .then(console.log)
    .catch(console.warn)

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn)


function App() {
}
export default App;
