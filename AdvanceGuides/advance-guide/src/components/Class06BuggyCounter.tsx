import React, {useState} from "react";

function Class06BuggyCounter() {
    const [count, setCount] = useState(0)

    if (count === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
    }
    return <h1 onClick={() => setCount(count + 1)}>{count}</h1>;
}

export {Class06BuggyCounter}