import React from "react";
import {Class06BuggyCounter} from "./Class06BuggyCounter";
import {Class06ErrorBoundary} from "./Class06ErrorBoundary";

function Class06ErrorBoundaries() {
    return (
        <div>
            <hr/>
            <h3>Error Boundaries</h3>
            <p>Estos dos contadores están dentro del mismo límite de error. Si uno falla, el límite de error sustituirá a ambos.</p>
            <p>Estos dos contadores están cada uno dentro de su propio límite de error. Por lo tanto, si uno falla, el otro no se ve afectado.</p>
            <Class06ErrorBoundary>
                <Class06BuggyCounter />
                <Class06BuggyCounter />
            </Class06ErrorBoundary>
            <br/>
            <br/>
            <p>Estos dos contadores están cada uno dentro de su propio límite de error. Por lo tanto, si uno falla, el otro no se ve afectado.</p>
            <Class06ErrorBoundary><Class06BuggyCounter /></Class06ErrorBoundary>
            <Class06ErrorBoundary><Class06BuggyCounter /></Class06ErrorBoundary>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export {Class06ErrorBoundaries}