import logo from './logo.svg';
import React from 'react';
import './App.css';

import Main from './children/Main';
import Header from './children/Header';

class App extends React.Component {
	
	constructor(props) {
		super( props );
	}
	
	render() {
		return (
			<div className="App">
				<h1>React Children</h1>
				<div>
					<Header>
						<h1>Questo è lo Header</h1>
					</Header>
				</div>
				<div>
					<Main title="Titolo pagina" text="Testo pagina"/>
				</div>
			</div>
		);
	}
	 
}

export default App;
