import {useEffect, useState} from "react";
import {useFriendStatus} from "./FuntionHooksCustom";

interface Friend {
    id: number,
    name: string
}

const friendList = [
    { id: 1, name: 'Phoebe' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Ross' },
];

const circulo = {
    width: '15px',
    height: '15px',
    radius: '50%',
    borderRadius: '50%',
}

function Circle({color}: {color: string}){
    return (
        <div style={{...circulo, ...{background: '#5cb85c'}}}> </div>
    )
}

function FriendStatus({friend}: { friend: Friend }) {
    const isOnline = useFriendStatus(friend.id);
    return (<p>is Status: {isOnline ? 'Online' : 'Offline'}</p>);
}

function FriendListItem({friend}: { friend: Friend }) {
    const isOnline = useFriendStatus(friend.id);

    return (
        <li style={{color: isOnline ? 'green' : 'black'}}>
            {friend.name}
        </li>
    );
}

function ChatRecipientPicker(){
    const [recipientID, setRecipientID] = useState(1);
    const isRecipientOnline = useFriendStatus(recipientID);

    return (
        <>
            <Circle color={isRecipientOnline ? 'green' : 'red'} />
            <select
                value={recipientID}
                onChange={e => setRecipientID(Number(e.target.value))}
            >
                {friendList.map(friend => (
                    <option key={friend.id} value={friend.id}>
                        {friend.name}
                    </option>
                ))}
            </select>
        </>
    )
}

function Class04HooksCustom({friend}: { friend: Friend }) {
    return (
        <div>
            <hr/>
            <h3>Hooks personalizados</h3>
            <br/>
            <FriendListItem friend={friend}/>
            <FriendStatus friend={friend}/>
            <ChatRecipientPicker />
        </div>
    );
}


export {Class04HooksCustom}