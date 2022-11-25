import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfo from './UserInfo';

class MyComponent extends React.Component {
    render() {
        const myInfor = ['a','b','c']
        return (
            <>
                <UserInfo/>
                <br />
                <hr /><hr />
                <DisplayInfor name={"MCN"} age={30} myInfor={myInfor} />
            </>
        )
    }
}

export default MyComponent;