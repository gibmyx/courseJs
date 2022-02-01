import {Component} from "react";
import Calculator from "./Calculator"

class LiftingStateUp extends Component<any, any>{
    render() {
        return (
            <div>
                <h1>Levantando el estado</h1>
                <br/>
                <Calculator />
            </div>
        )
    }
}

export default LiftingStateUp
