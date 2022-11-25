import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfo from './UserInfo';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'Mai Cong Ngoan', age: 31},
            {id: 2, name: 'Le Thi Thuy Linh', age: 30},
            {id: 3, name: 'Mai Gia Hung', age: 4}
        ]
    }

    render() {
        return (
            <>
                <UserInfo/>
                <br />
                <hr /><hr />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </>
        )
    }
}

export default MyComponent;