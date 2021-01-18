import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import ButtonBack from './UserButtons';

class UserEdit extends React.Component {
	
	constructor( props ) {
		super( props );
		this.state = { userId : this.props.match.params.userId };
		this.handleChange = this.handleChange.bind( this );
		this.saveUser = this.saveUser.bind( this );		
	}
	
	componentDidMount() {
		axios
			.get( `https://jsonplaceholder.typicode.com/users/${this.state.userId}` )
			.then( res => {
				const user = res.data;
				this.setState( { user } );
			});
	}

	handleChange = e => {
		console.log( e );
		this.setState( prevState => ( {
				user: { ...prevState.user, [e.target.name]: e.target.value }
		} ) );
		console.log( this.state.user );
	}
	
	saveUser( e ) {
		e.preventDefault();
		console.log( `saveUser -> ${JSON.stringify(this.state.user)}` );
		const c = window.confirm( `Sei sicuro di voler modificare l'utente ${this.state.user.name}?` );
		if ( c ) {
			axios
				.patch( `https://jsonplaceholder.typicode.com/users/${this.state.userId}`, this.state.user )
                .then(res => {
                    console.log(`Esito inserimento : ${res.status}`);
                })
		}		
	}
	
	render() {
		let userForm = <div>Sto caricando</div>
		if ( this.state.user ) {
			userForm = <Form onSubmit={this.saveUser}>
					<Form.Group controlId="name">
						<Form.Label>Nome</Form.Label>
						<Form.Control type="text" name="name" value={this.state.user.name} onChange={this.handleChange}></Form.Control>
					</Form.Group>
					<Form.Group controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" name="username" value={this.state.user.username}  onChange={this.handleChange}></Form.Control>
					</Form.Group>
					<Form.Group controlId="name">
						<Form.Label>Email</Form.Label>
						<Form.Control type="text" name="email" value={this.state.user.email} onChange={this.handleChange}></Form.Control>
					</Form.Group>	
					<Button variant="primary" type="submit" onClick={this.saveUser}>Salva</Button>
					&nbsp;
					<ButtonBack />
				</Form>
		}
		return (
			<div>
				<h2>Modifica utente</h2>
				{userForm}
			</div>
		);
	}
	
}

export default UserEdit;