import {useState} from "react";

function CounterApp({value} : {value: number}) {

    const [count, setCount] = useState(value)

    const handleAdd = () => setCount(prevState => prevState +1 )
    const handleSubtract = () => setCount(prevState => prevState -1 )
    const handleReset = () => setCount(value)

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{count}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    )
}

export default CounterApp