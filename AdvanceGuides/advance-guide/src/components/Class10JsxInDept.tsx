import React from "react";

function Class10JsxInDept() {

    const props = {firstName: 'Ben', lastName: 'Hector'};

    return (
        <div>
            <hr/>
            <h3>JSX en profundidad</h3>
            <br/>
            <MyComponents.DatePicker color="blue" />
            <br/>
            <Greeting firstName={props.firstName} lastName={props.lastName} />
            <Greeting {...props} />
            <br/>
            <br/>
        </div>
    )
}

const MyComponents = {
    DatePicker: function DatePicker(props: {color: string}) {
        return <div>Imagine a {props.color} datepicker here.</div>;
    }
}

const Greeting = (props: {firstName: string, lastName: string}) => {
    const {firstName, lastName} = props;
    return <p>Hello {firstName} {lastName}</p>
}
export {Class10JsxInDept}