function SplitPane(props: any) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contacts(props: any) {
    return (
        <h3>
            this is Contacts
        </h3>
    )
}

function Chat(props: any) {
    return (
        <h4>
            this is Chat
        </h4>
    )
}

export {SplitPane, Contacts, Chat}