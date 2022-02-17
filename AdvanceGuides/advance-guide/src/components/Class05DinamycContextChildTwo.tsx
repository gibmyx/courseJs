import React, {useContext} from "react";
import {ThemeContext, FunctionContext} from "./Class05ThemaContext"

function Class05DinamycContextChildTwo() {

    const themeContext = useContext(ThemeContext);
    const functionContext = useContext(FunctionContext);

    return (
        <div style={{margin: "20px"}}>
            <p>This is Child component two</p>
            <button
                onClick={functionContext.toggleTheme}
                style={{backgroundColor: themeContext.theme.background}}>
                Toggle Theme
            </button>
        </div>
    )
}

export {Class05DinamycContextChildTwo}