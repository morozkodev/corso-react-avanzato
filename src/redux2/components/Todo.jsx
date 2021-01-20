import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = ({ todo, toggleTodo }) => (
    <li onClick={() => toggleTodo(todo.id)} ><span>{ todo.content}</span></li>
)

export default connect(null, {toggleTodo})(Todo);