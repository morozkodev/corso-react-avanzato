import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';

function mapDispatchToProps(dispatch){
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class ConnectedForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { titolo: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event){
        event.preventDefault();
        const { titolo } = this.state;
        this.props.addArticle({ titolo });
        this.setState({ titolo: '' });
    }
    render(){
        const { titolo } = this.state;
        return (
            <div>
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlForm="titolo">Titolo</label>
                        <input
                            type="text"
                            id="titolo"
                            value={titolo}
                            onChange={this.handleChange}
                         />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;