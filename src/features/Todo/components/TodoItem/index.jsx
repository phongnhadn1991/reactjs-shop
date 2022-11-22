import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired,
    onTodoItemClick: PropTypes.func
};

TodoItem.defaultProps = {
    todoItem: [],
    onTodoItemClick: null
}

function TodoItem({todoItem, onTodoItemClick}) {
    const {id,title,status} = todoItem

    const handleTodoItemClick = (todoItemID) => {
        console.log('todoItemID >>>',todoItemID);
        if(!onTodoItemClick) return;
        onTodoItemClick(todoItemID)
    }

    return (
        <li
            className={
                classnames('p-todo_item',{
                    completed: status === 'completed'
                })
            }
            onClick={() => handleTodoItemClick(id)}
        >
            {id}-{title}
        </li>
    );
}

export default TodoItem;