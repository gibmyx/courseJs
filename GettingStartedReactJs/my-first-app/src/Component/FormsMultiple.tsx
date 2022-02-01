import {ChangeEvent, Component} from "react";

class FormsMultiple extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isGoing: true,
            select: "coconut",
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }
    componentDidMount() {
        console.log("There 1")
    }

    componentWillUnmount() {
        console.log("There 2")
    }

    handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>Formularios Multiple</h1>
                <br/>
                <form>
                    <label>
                        Is going:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Number of guests:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Pick your favorite flavor:
                        <select name="select" value={this.state.select} onChange={this.handleSelectChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}

export default FormsMultiple