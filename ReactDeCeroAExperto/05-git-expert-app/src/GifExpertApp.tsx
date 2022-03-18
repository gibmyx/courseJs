import React, {useState} from "react";
import AddCategory from "./components/AddCategory";

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'DragonBall'])

    const handleAdd = () => {
        setCategories(['HunterXHunter', ...categories])
    }
    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {categories.map((category, index) => {
                    return (
                        <li key={category}>{category}</li>
                    )
                })}
            </ol>
        </>
    )
}

export default GifExpertApp;