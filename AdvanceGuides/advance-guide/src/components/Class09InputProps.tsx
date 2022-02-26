import React, {ChangeEvent} from "react";
import {User} from "./Class09Interfaces";

function Class09InputProps({name, lastName, onChangeUser}: User) {

    const handleText = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        e.preventDefault()
        onChangeUser(e.target.name, e.target.value)
    }

    return (
        <>
            <input placeholder={"name"} name={"name"} value={name} onChange={handleText}/>
            <br/>
            <input placeholder={"lastname"} name={"lastname"} value={lastName} onChange={handleText}/>
        </>
    )
}

export {Class09InputProps}