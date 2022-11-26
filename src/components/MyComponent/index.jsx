import React, { useState } from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfo from './AddUserInfo';
import './style.scss';

function MyComponent() {
    const dataListUser =  [
        {id: 1, name: 'Mai Cong Ngoan', age: 31},
        {id: 2, name: 'Le Thi Thuy Linh', age: 30},
        {id: 3, name: 'Mai Gia Hung', age: 4}
    ]
    
    const [listUsers,setlistUsers] = useState(dataListUser)

    const handleAddNewUser = (userInfo) => {
        setlistUsers([userInfo, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let cloneListUser = [...listUsers]
        cloneListUser = cloneListUser.filter((item) => item.id !== userId)
        setlistUsers(cloneListUser)
    }

    return (
        <>
            <AddUserInfo 
                handleAddNewUser={handleAddNewUser}
            />
            <br /><hr /><br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>    
    )
}

export default MyComponent;