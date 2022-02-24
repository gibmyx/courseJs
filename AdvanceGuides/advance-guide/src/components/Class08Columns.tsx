import React from "react";

type Item = {
    id: number,
    term: string,
    description: string
}

function Class08Columns() {
    return (
        <React.Fragment>
            <td>Hello</td>
            <td>World</td>
        </React.Fragment>
    )
}

function Class08Glossary({items}: {items: Item[]}) {
    return (
        <dl>
            {items.map(item => (
                // Sin el prop 'key', React disparará una advertencia de key
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    )
}

export {Class08Columns, Class08Glossary}