import {Component} from "react";
import {WelcomeDialog} from "./WelcomeDialog"
import {SignUpDialog} from "./SignUpDialog";
import {SplitPane, Contacts, Chat} from "./SplitPane";

class CompositionVsInheritance extends Component<any, any>{

    render() {
        return (

            <div>
                <h1>Composition Vs Inheritance</h1>
                <br/>
                <WelcomeDialog />
                <br/>
                <SplitPane
                    left={
                        <Contacts />
                    }
                    right={
                        <Chat />
                    } />
                <br />
                <SignUpDialog />
            </div>
        );
    }
}

export default CompositionVsInheritance