import React from "react";

class Clock extends React.Component<any, any> {
    timerID: any

    constructor(props: any) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Manejo de Estado</h1>
                <h2>The time is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Clock