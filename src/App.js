// esempio di uso di react-redux
import React from 'react';
import Form from './redux/components/Form';
import List from './redux/components/List';

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <h1>App React redux</h1>
                <Form />
                <hr />
                <List />
            </div>
        )
    }
}
export default App;

