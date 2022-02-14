import React, {Fragment, RefObject} from "react";

function CustomTextInput({textInput, focus} : {textInput: RefObject<HTMLInputElement>, focus: (textInput: RefObject<HTMLInputElement>) => void }){
    return (
        <Fragment>
            <input type="text" ref={textInput}/>
            <button type={"button"} onClick={() => focus(textInput)}>Focus</button>
        </Fragment>
    )
}

function Class02ControlDeFoco() {
    let textInput = React.createRef<HTMLInputElement>()

    const focus = (textInput: RefObject<HTMLInputElement>): void => {
        if (textInput.current){
            textInput.current.focus()
        }
    }

    return (
        <div>
            <hr/>
            <h3>Control de foco</h3>
            <CustomTextInput textInput={textInput} focus={focus}/>
        </div>
    )
}

export {Class02ControlDeFoco}