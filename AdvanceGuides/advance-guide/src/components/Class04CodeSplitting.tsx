import React, {Suspense, lazy} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Class04MyErrorBoundary from "./Class04MyErrorBoundary";

const Class04OtherComponent = lazy(() => import('./Class04OtherComponent'));
const Class04AnotherComponent = lazy(() => import('./Class04AnotherComponent'));
const Home = lazy(() => import('./../routes/Home'));
const About = lazy(() => import('./../routes/About'));

function Class04CodeSplitting() {

    import("./Class04Funtions").then(math => {
        console.log(math.add(16, 26));
    });
    import("./Class04Funtions").then(math => {
        console.log(math.subtract(16, 10));
    });


    return (
        <div>
            <hr/>
            <h3>División de codigo</h3>
            <Class04MyErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Class04OtherComponent/>tes
                    <Class04AnotherComponent/>
                </Suspense>
            </Class04MyErrorBoundary>
            <br/>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export {Class04CodeSplitting}