import React from "react";
import {Class05DinamycContextChildTwo} from "./Class05DinamycContextChildTwo"

function Class05DinamycContextChildOne() {
    return (
        <div style={{margin: "20px"}}>
            <p>This is Child component one</p>
            <Class05DinamycContextChildTwo />
        </div>
    )
}

export {Class05DinamycContextChildOne}