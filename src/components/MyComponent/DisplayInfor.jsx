import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowListUsers: true
    }

    handleShowHide = (event) => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }

    render() {
        // console.log(this.props);
        const { listUsers, handleDeleteUser } = this.props

        return (
            <>
                <div className="btnHandle">
                    <button onClick={(event) => {this.handleShowHide(event)}}>
                        {this.state.isShowListUsers === true ? 'Hide' : 'Show'} list users
                    </button>
                </div>
                { this.state.isShowListUsers &&
                    <div className="listUser">
                        {listUsers.map((user) => {
                            const { id, name, age } = user
                            return (
                                <div key={id} className={+age > 18 ? "green" : "red"}>
                                    My name's {name} <button onClick={() => {handleDeleteUser(id)}}>Delete</button><br/>
                                    My age's {age}
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </>
        )
    }
}

export default DisplayInfor