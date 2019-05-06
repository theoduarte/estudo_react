import React, { Component } from 'react';
import App from "./App";

class DrHjForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'teste',
            message: '',
            fruit: 'orange',
        }

        this.fruits = [
            {'name': 'Apple', 'value': 'apple'},
            {'name': 'Banana', 'value': 'banana'},
            {'name': 'Orange', 'value': 'orange'},
            {'name': 'Strawberry', 'value': 'strawberry'}
        ];

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { state } = this;

        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={state.name} onChange={this.handleChange} /> {state.name}
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" value={state.message} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Fruit:
                    <select name="fruit" value={state.fruit} onChange={this.handleChange} >
                        {
                            this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)
                        }
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default DrHjForm;