// esempio di uso di react-redux
import React from 'react';
import AddTodo from './redux2/components/AddTodo';
import TodoList from './redux2/components/TodoList';
import VisibilityFilters from './redux2/components/VisibilityFilters';


export default function App() {
	    return (
            <div>
                <h1>App React redux (combineReducers)</h1>
				<h2>Todo list</h2>
				<AddTodo />
				<hr/>
				<TodoList />
				<hr/>
				<VisibilityFilters/>
            </div>
        )
}

