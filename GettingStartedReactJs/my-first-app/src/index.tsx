import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import HelloWork from "./Component/HelloWork";
import Clock from "./Component/Clock";
import Greeting from "./Component/Greeting";

import PeopleInterfas from "./Interfaces/PeopleInterfas";
import People from "./Class/People";
const people: PeopleInterfas = new People("Gibmyx", "Gomez")

ReactDOM.render(
    <HelloWork people={people}/>,
    document.getElementById('root')
);

ReactDOM.render(
    <Clock />,
    document.getElementById('root2')
);

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root3')
);
reportWebVitals();
