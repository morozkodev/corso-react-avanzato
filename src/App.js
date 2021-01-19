import logo from './logo.svg';
import React from 'react';
import './App.css';
const ThemeContext = React.createContext( 'light' );
const UserContext = React.createContext( { name: 'Guest' } );

function Content() {
	return(
		<ThemeContext.Consumer>
			{theme => (
				<UserContext.Consumer>
						{user => (
							<ProfilePage user={user} theme={theme}/>
						)}
				</UserContext.Consumer>
			)}
		</ThemeContext.Consumer>
	)
}

function ProfilePage(props){
    return(
        <div>
            <p>{props.user}</p>
            <p>{props.theme}</p>
        </div>
    );
}

function Layout() {
	return (
		<div>
			<Content />
		</div>
	);
}

class App extends React.Component {
	
	render() {
		const user = { name: 'Lorenzo' };
		const theme = 'dark';
		return (
			<div className="App">
				<h1>App React Context</h1>
				<ThemeContext.Provider value={theme}>
					<UserContext.Provider value={user}>
						<Layout/>
					</UserContext.Provider>
				</ThemeContext.Provider>
			</div>
		);
	}
	 
}

export default App;
