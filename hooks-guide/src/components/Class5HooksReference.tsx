import React from "react"
import {Toolbar, Counter} from "./BasicHooks";
import {CounterReduce, TextInputWithFocusButton} from "./AdditionalHooks";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};
const ThemeContext = React.createContext(themes.light);

function Class5HooksReference() {
    return (
        <div>
            <hr/>
            <h2>Referencia de la API de los Hooks</h2>
            <br/>
            <h3>Hooks basicos</h3>
            <h3>useState</h3>
            <Counter initialCount={0}/>
            <br/>
            <h3>useContext</h3>
            <ThemeContext.Provider value={themes.light}>
                <Toolbar/>
            </ThemeContext.Provider>
            <br/>
            <h3>Hooks adicionales</h3>
            <h3>useReducer</h3>
            <CounterReduce initialCount={0}/>
            <br/>
            <h3>useCallback</h3>
            <p>Devuelve un callback memorizado.</p>
            <p>Pasa un callback en línea y un arreglo de dependencias. useCallback devolverá una versión memorizada del
                callback que solo cambia si una de las dependencias ha cambiado. Esto es útil cuando se transfieren
                callbacks a componentes hijos optimizados que dependen de la igualdad de referencia para evitar renders
                innecesarias (por ejemplo, shouldComponentUpdate).</p>
            <br/>
            <h3>useMemo</h3>
            <br/>
            <h3>useRef</h3>
            <TextInputWithFocusButton />
            <br/>
            <h3>useImperativeHandle</h3>
            <br/>
            <h3>useLayoutEffect</h3>
            <p>La firma es idéntica a useEffect, pero se dispara de forma síncrona después de todas las mutaciones de DOM. Use esto para leer el diseño del DOM y volver a renderizar de forma sincrónica. Las actualizaciones programadas dentro de useLayoutEffect se vaciarán sincrónicamente, antes de que el navegador tenga la oportunidad de pintar.</p>
            <p>Prefiera el useEffect estándar cuando sea posible para evitar el bloqueo de actualizaciones visuales.</p>
            <br/>
            <h3>useDebugValue</h3>
            <p>useDebugValue puede usarse para mostrar una etiqueta para Hooks personalizados en React DevTools.</p>
            <p>Por ejemplo, considera el Hook personalizado useFriendStatus descrito en “Construyendo sus propios Hooks”:</p>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export {Class5HooksReference}