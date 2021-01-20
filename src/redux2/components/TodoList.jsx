import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../selectors';

const TodoList = ({ todos }) => (
    <ul>
        { todos && todos.length ? todos.map((todo, index) => {
            return <Todo key={`todo${todo.id}`} todo={todo} />
            }
        ) : 'Nessun todo disponibile!' }
    </ul>
)

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
    /* prima versione senza filtri
    const { byIds, allIds } = state.todos || {};
    const todos = allIds && state.todos.allIds.length 
    ? allIds.map( id => (byIds ? {...byIds[id], id} : null ))
    : null
    return { todos };
    */
}
export default connect(mapStateToProps)(TodoList);
