import React, {ReactElement, useEffect, useState} from "react";
import ReactDOM from "react-dom";


function Modal({children}:{children: ReactElement}) {
    const el = document.createElement('div');
    const modalRoot = document.getElementById('modal-root');

    useEffect(() => {
        modalRoot?.appendChild(el)

        return () => {
            modalRoot?.appendChild(el)
        }
    }, [])

    return ReactDOM.createPortal(
        children,
        el
    );
}

function Child() {
    // El evento de clic en este botón se propagará hasta el padre,
    // porque no hay un atributo 'onClick' definido.
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
}

function Class11Portals() {

    const [clicks, setClicks] = useState<number>(0)

    const handleClick = () => {
      setClicks(clicks + 1)
    }

    return (

        <div>
            <hr/>
            <h3>Portales</h3>
            <br/>
            <div onClick={handleClick}>
                <p>Number of clicks: {clicks}</p>
                <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                </p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        </div>
    )
}

export {Class11Portals}