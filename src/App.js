import logo from './logo.svg';
import React from 'react';
import './App.css';

class MyList extends React.Component {
	
	render() {
		 return(
			<div>
				{this.props.data.map(
					( text, index ) => (
						<p key={index}>{text}</p>
				))}
			</div>
		)
	}

}

const withData = ( Comp, data ) => {
	class WithData extends React.Component {
		render() {
			return <Comp data={data}/>
		}
	}
	WithData.displayName = `WithData(${getDisplayName(Comp)})`;
	return WithData;
}

const getDisplayName = WrappedComp => {
	return WrappedComp.displayName || WrappedComp.Name || "Component";
}

const MyListData = withData( MyList, ['java', 'js', 'php', 'c++'] );

class App extends React.Component {
	
	constructor(props) {
		super( props );
	}
	
	render() {
		return (
			<div className="App">
				<h1>React HOC</h1>
				<MyListData/>
			</div>
		);
	}
	 
}

export default App;
