import React from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfo from './AddUserInfo';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'Mai Cong Ngoan', age: 31},
            {id: 2, name: 'Le Thi Thuy Linh', age: 30},
            {id: 3, name: 'Mai Gia Hung', age: 4}
        ]
    }

    handleAddNewUser = (userInfo) => {
        console.log(">>> check data",userInfo);
        this.setState({
            listUsers: [userInfo, ...this.state.listUsers]
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
                />
            </>
        )
    }
}

export default MyComponent;