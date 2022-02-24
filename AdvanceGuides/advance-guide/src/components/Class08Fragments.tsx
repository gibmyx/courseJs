import React from "react";
import {Class08Columns, Class08Glossary} from "./Class08Columns";

const items = [
    {
        id: 1,
        term: "Card",
        description: "descriprion one"
    },
    {
        id: 2,
        term: "Shoes",
        description: "descriprion two"
    },
    {
        id: 3,
        term: "House",
        description: "descriprion Three"
    }
]


function Class08Fragments() {
    return (

        <div>
            <hr/>
            <h3>Fragmentos</h3>
            <table>
                <tr>
                    <Class08Columns />
                </tr>
            </table>
            <br/>
            <br/>
            <Class08Glossary items={items}/>

        </div>
    )

}

export {Class08Fragments}