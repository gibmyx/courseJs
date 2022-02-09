import {useState, useEffect} from 'react';
import ChatAPI from "../class/ChatAPI";

interface Friend {
    id: number,
    name: string
}

function Class02HooksEffect({friend}: { friend: Friend }) {
    const [isOnline, setIsOnline] = useState(false);


    // Similar a componentDidMount y componentDidUpdate:
    useEffect(() => {

        function handleStatusChange(status: { isOnline: boolean }) {
            setIsOnline(status.isOnline);
        }


        ChatAPI.subscribeToFriendStatus(friend.id, handleStatusChange);
        // Especifica cómo sanear este efecto:
        return function cleanup() {
            ChatAPI.unsubscribeFromFriendStatus(friend.id, handleStatusChange);
        };
    });

    return (
        <div>
            <hr/>
            <h3>Efectos de hooks</h3>
            {friend.name} is Status: {isOnline ? 'Online' : 'Offline'}
        </div>
    );
}

export {Class02HooksEffect}