import React from 'react';
import { messageService } from '../_services/message.service';

class SendMessage extends React.Component {

	constructor( props ) {
		super( props );
		this.state = { body: '' };
		this.handleChange = this.handleChange.bind( this ); 
		this.sendMessage = this.sendMessage.bind( this ); 
	}

	handleChange( e ) {
		this.setState( { body: e.target.value } );
	}

    sendMessage(){
        //invia messaggio a tutti i subscribers tramite un observable subject
        messageService.sendMessage( this.state.body );
		this.setState( { body: '' } );
    }

	clearMessage() {
		messageService.clearMessage();
	}

    render(){
        return(
            <div>
                <h2>Component Send Message</h2>
				<div>
					<input className="form-control" 
						id="testMessaggio" 
						type="text" 
						onChange={this.handleChange} 
						value={this.state.body}/>   
                </div>
				<button 
                    onClick={this.sendMessage}
                    className="btn btn-success">Invia Messaggio</button>
				<button
					onClick={this.clearMessage}
					className="btn btn-warning">Pulisci messaggi</button>
            </div>
        )
    }
}

export default SendMessage;