import {Component, FormEvent, ChangeEvent} from "react";

class Forms extends Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            select: 'coconut',
            text: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmitFormOne = this.handleSubmitFormOne.bind(this);
        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
        this.handleSubmitTwo = this.handleSubmitTwo.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleSubmitThree = this.handleSubmitThree.bind(this);
    }

    handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        this.setState({name: event.target.value});
    }

    handleSubmitFormOne(event: FormEvent) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        event.stopPropagation();
    }

    handleChangeTextArea(event: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({text: event.target.value});
    }

    handleSubmitTwo(event: FormEvent) {
        alert('An essay was submitted: ' + this.state.text);
        event.preventDefault();
        event.stopPropagation();
    }

    handleChangeSelect(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({select: event.target.value});
    }

    handleSubmitThree(event: FormEvent) {
        alert('Your favorite flavor is: ' + this.state.select);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Formularios</h1>
                <br/>
                <h3>Formulario 1</h3>
                <form onSubmit={this.handleSubmitFormOne}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br/>
                <h3>Formulario 2</h3>
                <form onSubmit={this.handleSubmitTwo}>
                    <label>
                        Essay:
                        <br/>
                        <textarea value={this.state.text} onChange={this.handleChangeTextArea} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <br/>
                <h3>Formulario 3</h3>
                <form onSubmit={this.handleSubmitThree}>
                    <label>
                        Pick your favorite flavor:
                        <select value={this.state.select} onChange={this.handleChangeSelect}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Forms