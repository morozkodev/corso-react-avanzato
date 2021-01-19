// esempio di uso di context
import React from 'react';
import { ThemeContext, themes } from './context/tema';
import ThemedButton from './context/bottone';


function Toolbar(props){
    return (
        <div>
            <ThemedButton onClick={props.changeTheme}>Test</ThemedButton>
        </div>
    )
}

class App extends React.Component {
	
    constructor(props){
        super(props);
		this.state = {
            theme: themes.light
        }
        this.toggleTheme = () => {
            this.setState( state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }));
        }
		/** 
    	this.toggleTheme = () => {
			this.setState(
				state = ( {
					theme: state.theme === themes.dark ? themes.light : themes.dark
				} )
			)
		}
		*/    
    }

    render () {
		return (
	        <div className="App">
	            <h1>App React context</h1>
	            <section>
	                <ThemeContext.Provider value={this.state.theme}>
	                    <Toolbar changeTheme={this.toggleTheme} />
	                </ThemeContext.Provider>
	            </section>
	        </div>
    	)
	}
	
}

export default App;



