// esempio di uso di react-redux
import React from 'react';
import Form from './redux/components/Form';
import List from './redux/components/List';
import Posts from './redux/components/Posts';

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <h1>App React redux</h1>
                <Form />
                <hr />
                <List />
				<hr/>
				<Posts />
            </div>
        )
    }
}
export default App;

