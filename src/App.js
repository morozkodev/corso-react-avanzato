// esempio di uso di observable (rxjs)
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { messageService } from './observable/_services/message.service';
import SendMessage from './observable/components/SendMessage';


class App extends React.Component {
	
	constructor( props ) {
		super( props );
		this.state = { messages: [] }
	}
	
	componentDidMount() {
		this.subscription = messageService.getMessage().subscribe( message => {
			if ( message ) {
				this.setState( { messages: [ ...this.state.messages, message ] } );
			} else {
				this.setState( { messages: [] } );
			}
		})
	}
	
	componenteWillUnmount() {
		this.subscription.unsubscribe();
	}
	
	render() {
		const { messages } = this.state;
		return (
			<Router>
				<div className="container">
					<h1>Observable</h1>
					<div className="row">
						<div className="col-md-6">
							<Route exact path="/" component={SendMessage} />
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<hr/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
						{ messages.map( (message, index) => <div key={index} className="alert alert-success">{message.text}</div>) }
						</div>
					</div>
				</div>
			</Router>
		)
	}
	
}

export default App;
