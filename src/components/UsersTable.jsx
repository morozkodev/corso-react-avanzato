import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

class UsersTable extends React.Component {
	
	constructor( props ) {
		super( props );
	}
	
	deleteUser( user ) {
		const c = window.confirm( `Sei sicuro di voler cancellare ${user.name}?` );
		if ( c ) {
			axios
				.delete( `https://jsonplaceholder.typicode.com/users/${user.id}` )
                .then(res => {
                    console.log(`Esito cancellazione : ${res.status}`);
                })
		}
	}
	
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }	
	
	render() {
		const righe = ( this.props.users.map(
			(currentUser) => 
					<tr key={currentUser.id.toString()}>
						<td>{currentUser.id}</td>
						<td>{currentUser.name}</td>
						<td>{currentUser.username}</td>
						<td>{currentUser.email}</td>
						<td><Link to={`/view/${currentUser.id}`}>Vedi</Link></td>
						<td><Link to={`/edit/${currentUser.id}`}>Modifica</Link></td>
						<td><button onClick={()=>this.deleteUser(currentUser)}>Elimina</button></td>	
					</tr> 
		) );
		return (
			<div>
				<h2>tabela utenti</h2>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Username</th>
							<th>Email</th>
							<th colSpan="3"><Link to={`/add`}>Aggiungi</Link></th>
						</tr>
					</thead>
					<tbody>
						{righe}
					</tbody>
				</Table>
			</div>
		);
	}
	
}

export default UsersTable;