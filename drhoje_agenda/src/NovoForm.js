import React, { Component } from 'react';
import App from "./App";

class NovoForm extends Component {

    constructor(props) {
        super(props);

        this.inputName = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this)
;    }

    handleSubmit(event) {
        console.log(this.inputName.current.value);
        event.preventDefault();
    }

    render() {
        const { state } = this;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" ref={this.inputName} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default NovoForm;