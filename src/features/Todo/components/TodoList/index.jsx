import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({todoList, onTodoClick}) {
    const handleTodoItemClick = (todoItemID) => {
        console.log('todoItemID on List >>>',todoItemID);
        if(!onTodoClick) return;
        onTodoClick(todoItemID)
    }

    return (
        <ul className='p-todo_list'>
            {
                todoList.map(todo => (
                    <TodoItem key={todo.id} todoItem={todo} onTodoItemClick={handleTodoItemClick} />
                ))
            }
        </ul>
    );
}

export default TodoList;