import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ]

    const [todoList, setTodoList] = useState(initTodoList)

    const handleTodoClick = (todoItemID) => {
        console.log('todoItemID on TodoFeature >>>',todoItemID);
        // Clone current array
        const newTodoList = [...todoList];

        // Find todoItem with ID & set status todoItem
        const itemToDo = newTodoList.find(item => item.id === todoItemID)
        if(itemToDo.status === 'new') {
            itemToDo.status = 'completed'
        }else {
            itemToDo.status = 'new'
        }

        // Update todoList
        setTodoList(newTodoList)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;