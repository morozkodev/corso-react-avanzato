import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import ButtonBack from './UserButtons';

class UserAdd extends React.Component {
	
	constructor( props ) {
		super( props );
		this.state = { user: {} };
		this.handleChange = this.handleChange.bind( this );
		this.saveUser = this.saveUser.bind( this );
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
		const c = window.confirm( `Sei sicuro di voler aggiungere l'utente ${this.state.user.name}?` );
		if ( c ) {
			axios
				.post( `https://jsonplaceholder.typicode.com/users`, this.state.user )
                .then(res => {
                    console.log(`Esito inserimento : ${res.status}`);
                })
		}		
	}
	
	render() {
		return (
			<div>
				<h2>Aggiungi utente</h2>
				<Form onSubmit={this.saveUser}>
					<Form.Group controlId="name">
						<Form.Label>Nome</Form.Label>
						<Form.Control type="text" name="name" onChange={this.handleChange}></Form.Control>
					</Form.Group>
					<Form.Group controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" name="username" onChange={this.handleChange}></Form.Control>
					</Form.Group>
					<Form.Group controlId="name">
						<Form.Label>Email</Form.Label>
						<Form.Control type="text" name="email" onChange={this.handleChange}></Form.Control>
					</Form.Group>	
					<Button variant="primary" type="submit" onClick={this.saveUser}>Salva</Button>
					&nbsp;
					<ButtonBack />
				</Form>
			</div>
		);
	}
	
}

export default UserAdd;