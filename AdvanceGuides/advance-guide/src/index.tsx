import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Class01SemanticaHTML} from "./components/Class01SemanticaHTML";
import {Class02ControlDeFoco} from "./components/Class02ControlDeFoco";
import {Class03MouseAndPointerEvents} from "./components/Class03MouseAndPointerEvents";
import {Class04CodeSplitting} from "./components/Class04CodeSplitting";
import {Class05Context} from "./components/Class05Context";
import {items} from "./data/items";



ReactDOM.render(
    <Fragment>
        <Class01SemanticaHTML items={items}/>
        <Class02ControlDeFoco />
        <Class03MouseAndPointerEvents />
        <Class04CodeSplitting />
        <Class05Context />
    </Fragment>,
    document.getElementById('root')
);
/*
todo: Esta seccion esta pendiente
https://es.reactjs.org/docs/accessibility.html#accessible-forms

todo: Esta seccion esta pendiente
https://es.reactjs.org/docs/accessibility.html#focus-control
*/
reportWebVitals();
