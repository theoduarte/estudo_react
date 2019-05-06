import React, { Component } from 'react';

class NewCourseForm extends Component {

    static defaultProps = {
        onSubmit: () => {}
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            image: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const newCourse = this.state;

        if(newCourse.name && newCourse.image && newCourse.category) {
            this.props.onSubmit(newCourse);
            this.setState({
                name: '',
                image: ''
            })
        }
    }

    handleChange(event) {
        const { target } = event;
        const { name, value } = target;
  
        this.setState({
            [name]: value
        })
    }

    render() {
        const { props, state } = this;
        return (
            <form className="course-form" onSubmit={this.handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input name="name" value={state.name} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    <span>Categoria:</span>
                    <select name="category" value={state.category} onChange={this.handleChange}>
                        <option value=''>Selecionar</option>
                        <option value="javascript">Javascript</option>
                        <option value="php">PHP</option>
                        <option value="ruby">Ruby</option>
                        <option value="python">Python</option>
                        <option value="c_sharp">C#</option>
                    </select>
                </label>
                <br/>
                <label>
                    <span>Imagem:</span>
                    <input name="image" value={state.image} onChange={this.handleChange} />
                </label>

                <button type="submit">Criar Curso</button>
            </form>
        );
    }
}

export default NewCourseForm;