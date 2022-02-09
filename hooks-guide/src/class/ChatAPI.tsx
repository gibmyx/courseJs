class ChatAPI {
    static subscribeToFriendStatus(id: number, handleStatusChange: (status: { isOnline: boolean }) => void) {
        handleStatusChange( {isOnline: true})
    }

    static unsubscribeFromFriendStatus(id: number, handleStatusChange: (status: { isOnline: boolean }) => void) {
        handleStatusChange( {isOnline: false})
    }
}

export default ChatAPI