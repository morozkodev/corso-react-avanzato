// esempio di uso di context
import React from 'react';
import './App.css';
const ThemeContext = React.createContext( { label2: 'Bottone Label 2' });
const ThemeContext3 = React.createContext('Bottone context 3');

function App (){
    return (
        <div className="App">
            <h1>Esempio react context</h1>
            <Toolbar valore="Test"></Toolbar>
        </div>
    )
}

function Toolbar(props){
    return (
        <div>
            <ThemedButton1 valore={props.valore}></ThemedButton1>
			<ThemedButton2></ThemedButton2>
			<ThemedButton3></ThemedButton3>
        </div>
    )
}

class ThemedButton1 extends React.Component{
	render() {
		return <button>{this.props.valore}</button>
	}
}

class ThemedButton2 extends React.Component{
	static contextType = ThemeContext;
	render() {
		return <button>{this.context.label2}</button>
	}
}

class ThemedButton3 extends React.Component{
	static contextType = ThemeContext3;
	render() {
		return <button>{this.context}</button>
	}
}

export default App;
