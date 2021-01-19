// esempio di uso di context
import React from 'react';
import './App.css';
const ThemeContext = React.createContext( { label1: 'Bottone Label 1' } );

function App (){
    return (
        <div className="App">
            <h1>Esempio react context</h1>
			<ThemeContext.Provider value={{ label1: 'Bottone Provider 1' }}>
				<Toolbar valore="Test"></Toolbar>
			</ThemeContext.Provider>
        </div>
    )
}

function Toolbar(props){
    return (
        <div>
            <ThemedButton1></ThemedButton1>
        </div>
    )
}

class ThemedButton1 extends React.Component{
	static contextType = ThemeContext
	render() {
		return <button>{this.context.label1}</button>
	}
}

export default App;
