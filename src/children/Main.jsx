import React from 'react';

class Main extends React.Component {
	
	constructor( props ) {
		super( props );
	}
	
	render() {
		return (
			<div>
				<h2>{ this.props.title }</h2>
				<p>{ this.props.text }</p>
			</div>
		)
	}
	
}

export default Main;