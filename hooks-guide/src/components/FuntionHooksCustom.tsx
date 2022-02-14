import { useState, useEffect } from 'react';
import ChatAPI from "../class/ChatAPI";

function useFriendStatus(friendID: number) {
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        function handleStatusChange(status: { isOnline: boolean }) {
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    }, [friendID]);

    return isOnline;
}
export {useFriendStatus}