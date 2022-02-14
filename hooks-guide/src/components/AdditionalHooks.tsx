import React, {useReducer, useRef} from "react"

const initialState = {count: 0};

function init(initialState: { count: number }) {
    return initialState;
}

type ActionType = {
    type: 'reset' | 'decrement' | 'increment',
    payload: typeof initialState
}

function reducer(state: typeof initialState, action: ActionType) {
    switch (action.type) {
        case 'reset':
            return init(action.payload);
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return state;
    }
}

function CounterReduce({initialCount}: { initialCount: number }) {
    const [state, dispatch] = useReducer(reducer, {count: initialCount}, init);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: "reset", payload: {count: initialCount}})}>Reset</button>
            <button onClick={() => dispatch({type: "decrement", payload: {count: initialCount}})}>-</button>
            <button onClick={() => dispatch({type: "increment", payload: {count: initialCount}})}>+</button>
        </>
    );
}

function TextInputWithFocusButton() {
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        // `current` apunta al elemento de entrada de texto montado
        if (inputEl && inputEl.current) {
            inputEl.current.focus();
        }
    };
    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}


export {CounterReduce, TextInputWithFocusButton}