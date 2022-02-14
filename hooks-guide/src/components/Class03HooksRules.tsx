import {useState, useEffect} from 'react';

function Class03HooksRules() {
    // 1. Usa la variable de estado del nombre
    const [name, setName] = useState('Mary');

    // 2. Usa un efecto para persistir el formulario
    useEffect(function persistForm() {
        console.log("persistForm")
        // 👍 No vamos a romper la primera regla nunca más.
        if (name !== '') {
            localStorage.setItem('formData', name);
        }
    }, [name]);

    // 3. Usa la variable de estado del apellido
    const [surname, setSurname] = useState('Poppins');

    // 4. Usa un efecto para la actualización del título
    useEffect(function updateTitle() {
        console.log("updateTitle")
        document.title = name + ' ' + surname;
    }, [name, surname]);
    return (
        <div>
            <hr/>
            <h3>Reglas de hooks</h3>
            <br/>
            <label>
                Nombre:
                <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}/>
            </label>
            <br/>
            <label>
                Apellido:
                <input
                    name="surname"
                    type="text"
                    value={surname}
                    onChange={(e) => {setSurname(e.target.value)}}/>
            </label>
        </div>
    );
}

export {Class03HooksRules}