import {ReactElement} from "react";

function Class04MyErrorBoundary({children}:{children: ReactElement}) {
    return (
        <>
            <h2>Ah ocurrido un error.</h2>
            {children}
        </>
    );
}

export default Class04MyErrorBoundary