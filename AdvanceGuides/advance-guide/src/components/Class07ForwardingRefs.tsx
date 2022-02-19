import React, {ForwardedRef, RefObject} from "react";
const FancyButton = React.forwardRef(({children}: { children: string }, ref: ForwardedRef<HTMLButtonElement>) => {
    const handleClick = () => {
        console.log((ref as RefObject<HTMLButtonElement>).current)
    }
    return (
        <button ref={ ref } className="FancyButton" onClick={ handleClick }>
            { children }
        </button>
    );
})


function Class07ForwardingRefs() {

    const ref = React.createRef<HTMLButtonElement>();

    return (
        <div>
            <hr/>
            <h3>Reenvío de refs</h3>
            <FancyButton ref={ref}>Click me!</FancyButton>
        </div>
    )
}

export {Class07ForwardingRefs}