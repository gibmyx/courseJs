import React from "react";
import {Class09MyLoggedComponent} from "./Class09MyLoggedComponent";
import {hocLogger} from "./Class09HocLogger";
import {Class09RequireAuthentication} from "./Class09RequireAuthentication";
import {Class09MyPrivateComponent} from "./Class09MyPrivateComponent";

function Class09HigherOrderComponents() {

    const HocLoggerComponent = hocLogger(Class09MyLoggedComponent);
    const RequireAuthentication = Class09RequireAuthentication(Class09MyPrivateComponent);

    return (
        <div>
            <hr/>
            <h3>Componentes de orden superior</h3>
            <HocLoggerComponent />
            <RequireAuthentication Authenticated={false}/>
            <br/>
        </div>
    )
}

export {Class09HigherOrderComponents}