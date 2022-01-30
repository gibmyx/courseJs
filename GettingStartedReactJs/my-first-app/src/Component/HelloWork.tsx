import React, {Component, MouseEvent} from "react";

function SecundComponent() {
    return (
        <div>
            <h2>There</h2>
        </div>
    )
}

class HelloWork extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            people: props.people,
            isToggleOn: true
        };
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    activateLasers() {
        console.log('You clicked submit.');
    }

    handleClick(e: MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        this.setState((state: any) => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <h1>Hello, world! {this.state.people.firstName} {this.state.people.lastName}</h1>
                <button onClick={(e) => this.handleClick(e)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                <br/>
                <br/>
                <br/>
                <button onClick={this.activateLasers}>
                    Activate Lasers
                </button>
                <SecundComponent/>
            </div>
        )
    }
}

export default HelloWork;
