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
    const [filterStatus, setfilterStatus] = useState('all')

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

    const handleShowAllClick = () => {
        setfilterStatus('all')
    }

    const handleShowCompletedClick = () => {
        setfilterStatus('completed')
    }

    const handleShowNewClick = () => {
        setfilterStatus('new')
    }

    const renderedTodoList = todoList.filter(
        todo => filterStatus === 'all' || filterStatus === todo.status
    )

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <p>Filter TodoList</p>
                <button onClick={handleShowAllClick}>All</button>
                <button onClick={handleShowCompletedClick}>Completed</button>
                <button onClick={handleShowNewClick}>New</button>
            </div>
        </div>
    );
}

export default TodoFeature;