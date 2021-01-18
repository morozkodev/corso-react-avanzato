import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';

import UsersTable from './components/UsersTable';
import UserAdd from './components/UserAdd';
import UserView from './components/UserView';
import UserEdit from './components/UserEdit';

import {Container} from 'react-bootstrap';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

class App extends React.Component {
	
	constructor(props) {
		super( props );
		this.state = {
			users: []
		};
	}
	
	componentDidMount() {
		axios
			.get( `https://jsonplaceholder.typicode.com/users` )
			.then( res => {
				console.log( `response status -> ${res.status}` );
				//console.log( `response data   -> ${JSON.stringify(res.data)}` );
				const users = res.data;
				this.setState( { users } );
			});
	}
	
	render() {
		return (
			<Router>
				<div className="App">
					<Container>
						<h1>Pagina iniziale</h1>
						<Switch>
							<Route exact path="/add" component={UserAdd}/>
							<Route exact path="/view/:userId" component={UserView}/>
							<Route exact path="/edit/:userId" component={UserEdit}/>
							<Route exact path="/">
								<UsersTable users={this.state.users}/>
							</Route>
						</Switch>
					</Container>
				</div>			
			</Router>			
		);
	}
	 
}

export default App;
