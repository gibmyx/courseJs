import React from "react";
import {Class09MyLoggedComponent} from "./Class09MyLoggedComponent";
import {hocLogger} from "./Class09HocLogger";
import {Class09RequireAuthentication} from "./Class09RequireAuthentication";
import {Class09MyPrivateComponent} from "./Class09MyPrivateComponent";
import {Class09InputProps} from "./Class09InputProps";
import {Class09LogProps} from "./Class09LogProps";

function Class09HigherOrderComponents() {

    const user = {
        name: "Gibmyx",
        lastName: "Gomez",
        onChangeUser: () => {}
    }

    const HocLoggerComponent = hocLogger(Class09MyLoggedComponent);
    const RequireAuthentication = Class09RequireAuthentication(Class09MyPrivateComponent);
    const LogProps = Class09LogProps(Class09InputProps, user);

    return (
        <div>
            <hr/>
            <h3>Componentes de orden superior</h3>
            <HocLoggerComponent />
            <RequireAuthentication Authenticated={false}/>
            <br/>
            <LogProps/>
            <br/>
            <br/>
        </div>
    )
}

export {Class09HigherOrderComponents}