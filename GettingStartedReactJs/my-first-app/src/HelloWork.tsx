import PeopleInterfas from "./Interfaces/PeopleInterfas";
import React, {Props} from "react";

function SecundComponent() {
    return(
        <div>
            <h2>There</h2>
        </div>
    )
}

function HelloWork({people}: {people:PeopleInterfas}) {
    return (
        <div>
            <h1>Hello, worlda! {people.firstName} {people.lastName}</h1>
            <SecundComponent />
        </div>
    )
};

export default HelloWork;
