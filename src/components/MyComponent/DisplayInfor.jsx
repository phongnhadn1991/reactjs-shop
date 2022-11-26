import React, { useState } from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";

DisplayInfor.propTypes = {
    
};

function DisplayInfor(props) {
    const { listUsers, handleDeleteUser } = props
    const [isShowListUsers, setisShowListUsers] = useState(true)
    const handleShowHide = (event) => {
        setisShowListUsers(!isShowListUsers)
    }

    return (
        <>
            <div className="btnHandle">
                   <button onClick={(event) => {handleShowHide(event)}}>
                       {isShowListUsers === true ? 'Hide' : 'Show'} list users
                   </button>
            </div>
            { isShowListUsers &&
                <div className="listUser">
                    {listUsers.map((user) => {
                        const { id, name, age } = user
                        return (
                            <div key={id} className={
                                classnames(
                                    'itemUser',
                                    +age > 18 ? 'green' : 'red'
                                )
                            }>
                                My name's {name} <button onClick={() => {handleDeleteUser(id)}}>Delete</button><br/>
                                My age's {age}
                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </>
    );
}

export default DisplayInfor