import React from "react";

const PrimeraApp = ({saludo = "Hola mundo"}: any) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify(saludo, null, 3)}</pre>*/}
            <p>Mi primera aplicacion</p>
        </>
    )
}

export default PrimeraApp