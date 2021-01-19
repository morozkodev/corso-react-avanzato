// esempio di uso di context
import React from 'react';
import ThemedButton from './context/bottone';

function App (){
    return (
        <div className="App">
            <h1>App React context</h1>
            <section>
				<ThemedButton>Test</ThemedButton>
			</section>
        </div>
    )
}

export default App;
