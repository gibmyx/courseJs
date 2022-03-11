import React, {Profiler} from "react";
import {Class12TextInput} from "./Class12TextInput"


function Class12Profiler() {

    const callback = () => {
        console.log("there")
    }

    return (
        <Profiler id={"profiles"} onRender={callback}>
            <div>
                <hr/>
                <h3>Profiles</h3>
                <br/>
                <Class12TextInput />
                <hr/>
            </div>
        </Profiler>
    )
}

export {Class12Profiler}