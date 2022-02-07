import React, {Fragment, RefObject} from "react";

function CustomTextInput({textInput} : {textInput: RefObject<HTMLInputElement>}){

    const focus = (textInput: RefObject<HTMLInputElement>): void => {
        if (textInput.current){
            textInput.current.focus()
        }
    }

    return (
        <Fragment>
            <input type="text" ref={textInput}/>
            <button type={"button"} onClick={() => focus(textInput)}>Focus</button>
        </Fragment>
    )
}

function ControlDeFoco() {
    let textInput = React.createRef<HTMLInputElement>()

    return (
        <div>
            <hr/>
            <h3>Control de foco</h3>
            <CustomTextInput textInput={textInput}/>
        </div>
    )
}

export {ControlDeFoco}