import React from "react";

const PrimeraApp = ({saludo, subtitulo = 'Soy un subtitulo'}: { saludo:string }) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify(saludo, null, 3)}</pre>*/}
            <p>{subtitulo}</p>
        </>
    )
}

export default PrimeraApp