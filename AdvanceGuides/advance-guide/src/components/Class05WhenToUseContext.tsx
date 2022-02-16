import React, {useContext} from "react";

const ThemeContext = React.createContext('light');
function Class05WhenToUseContext() {
    return (
        <div>
            <p>This is father component</p>
            <ThemeContext.Provider value="dark">
                <Class05ChildComponentOne />
            </ThemeContext.Provider>
        </div>
    )
}

function Class05ChildComponentOne() {
    return (
        <div style={{
            margin: "20px"
        }}>
            <p>This is Child component one</p>
            <Class05ChildComponentTwo />
        </div>
    )
}

function Class05ChildComponentTwo() {

    const theme = useContext(ThemeContext);
    return (
        <div style={{
            margin: "20px"
        }}>
            <p>This is Child component two {theme}</p>
        </div>
    )
}

export {Class05WhenToUseContext}