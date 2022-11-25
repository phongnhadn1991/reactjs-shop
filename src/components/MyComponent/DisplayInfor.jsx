import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // console.log(this.props);
        const { listUsers } = this.props
        return (
            <div>
                {listUsers.map((user,idx) => {
                    const { name, age } = user
                    return (
                        <div key={idx}>
                            My name's {name}<br/>
                            My age's {age}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor