import React from 'react';
import {ThemeContext} from './tema';

class ThemedButton extends React.Component {
	render() {
		let props = this.props;
		let theme = this.context;
		return <button
			{...props}
			style={{ backgroundColor: theme.background, color: theme.foreground, fontWeight: 'bold', fontSize: '+2em' }}
			>Test</button>
	}
}

ThemedButton.contextType = ThemeContext;
export default ThemedButton