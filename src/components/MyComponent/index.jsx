import React from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfo from './AddUserInfo';
import './style.scss';
class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'Mai Cong Ngoan', age: 31},
            {id: 2, name: 'Le Thi Thuy Linh', age: 30},
            {id: 3, name: 'Mai Gia Hung', age: 4}
        ]
    }

    handleAddNewUser = (userInfo) => {
        this.setState({
            listUsers: [userInfo, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let cloneListUser = [...this.state.listUsers]
        cloneListUser = cloneListUser.filter((item) => item.id !== userId)
        this.setState({
            listUsers: cloneListUser
        })
    }

    render() {
        return (
            <>
                <AddUserInfo 
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /><hr /><br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        )
    }
}

export default MyComponent;