import React, {useEffect, useState} from "react";
import {User} from "./Class09Interfaces";

function Class09LogProps(WrappedComponent: React.ComponentType<User>, user: User) {

    const [name, setName] = useState(user.name)
    const [lastName, setLastName] = useState(user.lastName)

    const onChangeUser = (name: string, value: string): void => {
        if (name == "name")
            setName(value)

        if (name == "lastname")
            setLastName(value)
    }

    return () => {

        return (
            <>
                <p>Nombre</p>
                <WrappedComponent
                    name={name}
                    lastName={lastName}
                    onChangeUser={onChangeUser}
                />
            </>
        )
    };
}

export {Class09LogProps}