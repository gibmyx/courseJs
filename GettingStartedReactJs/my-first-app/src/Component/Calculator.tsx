import {ChangeEvent, Component} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

function toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: any) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: ''};
    }

    handleCelsiusChange(temperature: string) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature: string) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <fieldset>
                <TemperatureInput scale={"c"}
                                  temperature={celsius}
                                  onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale={"f"}
                                  temperature={fahrenheit}
                                  onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={celsius}/>
            </fieldset>
        );
    }
}

export default Calculator