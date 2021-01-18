import React from 'react';
import axios from 'axios';
import ButtonBack from './UserButtons';

class UserView extends React.Component {
	
	constructor( props ) {
		super( props );
		this.state = { userId : this.props.match.params.userId };
	}
	
	componentDidMount() {
		axios
			.get( `https://jsonplaceholder.typicode.com/users/${this.state.userId}` )
			.then( res => {
				const user = res.data;
				this.setState( { user } );
			});
	}
	
	render() {
		let userData = '<div>Sto caricando</div>';
		const user = this.state.user;
		if (user) {
			userData = <div>
				<h3>{user.name}</h3>
				<p><strong>Email:</strong> {user.email}</p>
				<p><strong>Telefono:</strong> {user.phone}</p>
				<p><strong>Indirizzo:</strong> {user.address.street}, {user.address.city}</p>
			</div>;
		}
		return (
			<div>
				<h2>User View {this.state.userId}</h2>
				{userData}
				<ButtonBack />
			</div>
		);
	}
	
}

export default UserView;