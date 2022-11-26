import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowListUsers: true
    }

    componentDidMount() {
        console.log('>>> call me component did mount');
        setTimeout(() => {
            document.title = 'MCN Title'
        },3000)
    }

    componentDidUpdate(prevProps, prevState, snapshop) {
        console.log('>>> call me component did update', prevProps , this.props);
    }

    handleShowHide = (event) => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }

    render() {
        console.log(">>> call me render");
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