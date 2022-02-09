import {useState, useEffect} from "react";

function Class01HooksState(){

    // Declaración de una variable de estado que llamaremos "count"
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    // Similar a componentDidMount y componentDidUpdate:
    useEffect(() => {
        // Actualiza el título del documento usando la Browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <h3>Estados de hooks</h3>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export {Class01HooksState}