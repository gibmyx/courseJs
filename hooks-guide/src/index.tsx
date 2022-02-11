import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Class01HooksState} from "./components/Class01HooksState";
import {Class02HooksEffect} from "./components/Class02HooksEffect";
import {Class03HooksRules} from "./components/Class03HooksRules";
import {Class04HooksCustom} from "./components/Class04HooksCustom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Class01HooksState/>
        <Class02HooksEffect friend={{id: 1, name: "Gibmyx"}}/>
        <Class03HooksRules/>
        <Class04HooksCustom friend={{id: 1, name: "Gibmyx"}}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
