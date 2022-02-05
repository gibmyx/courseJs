import React, {useState} from "react";

import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";
import Product from "../contract/Product";

function FilterableProductTable({products}: { products: Product[] }){

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const onChangeFilerText = (value: string): void => {
        setFilterText(value)
    }

    const onChangeInStockOnly = (value: boolean): void => {
        setInStockOnly(value)
    }

    return (
        <div>
            <h1>Ejercicio 1 - React.JS</h1>
            <br/>
            <fieldset>
                <SearchBar
                    onChangeFilerText={ onChangeFilerText }
                    onChangeInStockOnly={ onChangeInStockOnly }
                    filterText={ filterText }
                    inStockOnly={ inStockOnly } />
                <ProductTable
                    products={products}
                    filterText={ filterText }
                    inStockOnly={ inStockOnly }
                />
            </fieldset>
        </div>
    );
}

export default FilterableProductTable