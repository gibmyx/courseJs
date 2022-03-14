
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre: string ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre: string ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


// Tarea
export const getUsuarioActivo = ( nombre: string ) =>({
    uid: 'ABC567',
    username: nombre
})




