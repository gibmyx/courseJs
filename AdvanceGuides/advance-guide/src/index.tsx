import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Class01SemanticaHTML} from "./components/Class01SemanticaHTML";
import {Class02ControlDeFoco} from "./components/Class02ControlDeFoco";
import {Class03MouseAndPointerEvents} from "./components/Class03MouseAndPointerEvents";
import {Class04CodeSplitting} from "./components/Class04CodeSplitting";
import {Class05Context} from "./components/Class05Context";
import {Class06ErrorBoundaries} from "./components/Class06ErrorBoundaries";
import {Class07ForwardingRefs} from "./components/Class07ForwardingRefs";
import {Class08Fragments} from "./components/Class08Fragments";
import {Class09HigherOrderComponents} from "./components/Class09HigherOrderComponents";
import {Class10JsxInDept} from "./components/Class10JsxInDept";
import {items} from "./data/items";



ReactDOM.render(
    <React.StrictMode>
        <Class01SemanticaHTML items={items}/>
        <Class02ControlDeFoco />
        <Class03MouseAndPointerEvents />
        <Class04CodeSplitting />
        <Class05Context />
        <Class06ErrorBoundaries />
        <Class07ForwardingRefs />
        <Class08Fragments />
        <Class09HigherOrderComponents />
        <Class10JsxInDept />
    </React.StrictMode>,
    document.getElementById('root')
);
/*
todo: Esta seccion esta pendiente
https://es.reactjs.org/docs/accessibility.html#accessible-forms

todo: Esta seccion esta pendiente
https://es.reactjs.org/docs/accessibility.html#focus-control
*/
reportWebVitals();
