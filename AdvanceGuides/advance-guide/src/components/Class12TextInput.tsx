import React, {ChangeEvent, useState} from "react";

function Class12TextInput() {
    const [name, setName] = useState<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <input type="text" value={name} onChange={handleChange}/>
    )
}

export {Class12TextInput}