import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import HelloWork from "./Component/HelloWork";
import Clock from "./Component/Clock";
import Greeting from "./Component/Greeting";
import ListAndKeys from "./Component/ListAndKeys"
import Forms from "./Component/Forms";
import FormsMultiple from "./Component/FormsMultiple"
import LiftingStateUp from "./Component/LiftingStateUp"
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

ReactDOM.render(
    <ListAndKeys />,
    document.getElementById('root4')
);

ReactDOM.render(
    <Forms />,
    document.getElementById('root5')
);

ReactDOM.render(
    <FormsMultiple />,
    document.getElementById('root6')
);

ReactDOM.render(
    <LiftingStateUp />,
    document.getElementById('root7')
);
reportWebVitals();
