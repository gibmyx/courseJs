import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {SemanticaHTML} from "./components/SemanticaHTML";
import {ControlDeFoco} from "./components/ControlDeFoco";
import {items} from "./data/items";



ReactDOM.render(
    <Fragment>
        <SemanticaHTML items={items}/>
        <ControlDeFoco />
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
