import {ChangeEvent} from "react";

function SearchBar(
    {
        onChangeFilerText,
        onChangeInStockOnly,
        filterText,
        inStockOnly
    }
    : {
        onChangeFilerText: (val: string) => void,
        onChangeInStockOnly: (val: boolean) => void,
        filterText: string,
        inStockOnly: boolean
    }
) {
    const handleText = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeFilerText(e.target.value);
    }

    const handleInStockOnly = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInStockOnly(e.target.checked);
    }

    return (
        <fieldset>
            <legend>SearchBar</legend>
            <form>
                <input type="text" placeholder="Search..." value={filterText} onChange={handleText}/>
                <p>
                    <input type="checkbox" checked={inStockOnly} onChange={handleInStockOnly}/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        </fieldset>
    );
}

export {SearchBar}