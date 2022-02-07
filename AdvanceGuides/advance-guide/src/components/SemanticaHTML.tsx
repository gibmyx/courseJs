import {Fragment, ReactElement} from "react";
interface Items {
    id: number,
    description: string,
    name: string
}

function ListItem({item}: {item: Items}) {
    return (
        <Fragment key={item.id}>
            <dt>{item.name}</dt>
            <dd>{item.description}</dd>
            <br/>
        </Fragment>
    );
}

function SemanticaHTML({items} : {items: Items[]}) {

    const listItems: ReactElement[] = [];

    items.map((item: Items) => {
        listItems.push(<ListItem item={item} key={item.id} />)
    })

    return (
        <div>
            <h3>Sematinca HTML</h3>
            <dl>
                {listItems}
            </dl>
        </div>
    )
}

export {SemanticaHTML}