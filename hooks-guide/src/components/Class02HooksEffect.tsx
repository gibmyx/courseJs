import {useState, useEffect, useDebugValue} from 'react';
import ChatAPI from "../class/ChatAPI";

interface Friend {
    id: number,
    name: string
}

function Class02HooksEffect({friend}: { friend: Friend }) {
    const [isOnline, setIsOnline] = useState(false);
    const [count, setCount] = useState(0);

    useDebugValue(isOnline ? 'Online' : 'Offline');
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        friend.id  = count;
    }, [count]);

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
    }, [friend.id]);

    return (
        <div>
            <hr/>
            <h3>Efectos de hooks</h3>
            {friend.name} is Status: {isOnline ? 'Online' : 'Offline'}
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export {Class02HooksEffect}