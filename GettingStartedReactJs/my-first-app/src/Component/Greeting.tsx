import React, {Component} from "react";

function UserGreeting(props: any) {
    return (
        <div>
            <h1>Welcome back!</h1>
            <button onClick={props.onClick}>Back</button>
        </div>
    );
}
function GuestGreeting(props: any) {
    return (
        <div>
            <h1>Please sign up.</h1>
            <button onClick={props.onClick}>Login</button>
        </div>
    );
}

function WarningBanner(props: any) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Greeting extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn,
            showWarning: true
        };
        this.changeStateLogin = this.changeStateLogin.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    changeStateLogin(){
        this.setState((preState: any) =>( {
            isLoggedIn:  !preState.isLoggedIn
        }))
    }

    handleToggleClick() {
        this.setState((state: any) => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <h1>Componente Condicionales {isLoggedIn}</h1>
                { isLoggedIn
                    ? <UserGreeting onClick={this.changeStateLogin}/>
                    : <GuestGreeting onClick={this.changeStateLogin}/>
                }
                {
                    isLoggedIn &&
                    <div>
                        <h3>Uste esta logueado</h3>
                        <button onClick={this.handleToggleClick}>
                            {this.state.showWarning ? 'Hide' : 'Show'}
                        </button>
                        <br/>
                        <WarningBanner warn={this.state.showWarning} />
                    </div>
                }
            </div>
        )
    }

}
export default Greeting