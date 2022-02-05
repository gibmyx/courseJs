import {ReactElement} from "react";
import {ProductCategoryRow} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";
import Product from "../contract/Product";

function ProductTable(
    {
        products,
        filterText,
        inStockOnly
    }
    : {
        products: Product[],
        filterText: string,
        inStockOnly: boolean
    }
    ) {

    const rows: ReactElement[] = [];
    let lastCategory: string = '';

    products.forEach((product: Product) => {

        if (product.name.indexOf(filterText) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}/>
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}/>
        );
        lastCategory = product.category;
    });

    return (
        <fieldset>
            <legend>ProductTable</legend>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </fieldset>
    )
}

export {ProductTable}