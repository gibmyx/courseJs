import React, {ChangeEvent, FormEvent, useState} from "react";

function AddCategory({setCategories}: {setCategories:string}) {
    const [inputValue, setInputValue] = useState('Hola mundo')
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (inputValue.trim().length > 2){
            setCategories(categoriesPrev => [...categoriesPrev, inputValue])
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="inputValue" value={inputValue} onChange={handleInputChange}/>
        </form>
    )
}

export default AddCategory