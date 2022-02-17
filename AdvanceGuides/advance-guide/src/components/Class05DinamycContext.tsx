import React from "react";
import {ThemeContext, FunctionContext, themes} from './Class05ThemaContext';
import {Class05DinamycContextChildOne} from "./Class05DinamycContextChildOne"

const alertFunction = () => {
    alert("Hello!")
}

function Class05DinamycContext() {
    return(
        <div>
            <br/>
            <p>Dinamyx Context</p>
            <FunctionContext.Provider value={{'toggleTheme': alertFunction}}>
                <ThemeContext.Provider value={{theme: themes.dark}}>
                    <Class05DinamycContextChildOne />
                </ThemeContext.Provider>
            </FunctionContext.Provider>
        </div>
    )
}

export {Class05DinamycContext}