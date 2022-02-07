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
import CompositionVsInheritance from "./Component/CompositionVsInheritance";
const people: PeopleInterfas = new People("Gibmyx", "Gomez")

ReactDOM.render(
    <div>
        <HelloWork people={people}/>
        <br/>
        <br/>
        <hr/>
        <Clock />
        <br/>
        <br/>
        <hr/>
        <Greeting isLoggedIn={false} />
        <br/>
        <br/>
        <hr/>
        <ListAndKeys />
        <br/>
        <br/>
        <hr/>
        <Forms />
        <br/>
        <br/>
        <hr/>
        <FormsMultiple />
        <br/>
        <br/>
        <hr/>
        <LiftingStateUp />
        <br/>
        <br/>
        <hr/>
        <CompositionVsInheritance />
        <br/>
        <br/>
        <br/>
        <br/>
    </div>,
    document.getElementById('root')
);

reportWebVitals();
