import {ChangeEvent, Component} from "react";
import {Dialog} from "./WelcomeDialog";

class SignUpDialog extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    ¡Apúntame!
                </button>
            </Dialog>
        );
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Bienvenido abordo, ${this.state.login}!`);
    }
}

export {SignUpDialog}