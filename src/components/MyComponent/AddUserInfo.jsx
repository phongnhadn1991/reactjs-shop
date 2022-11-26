import React, { useState } from 'react';
import PropTypes from 'prop-types';
// class AddUserInfo extends React.Component {
    
//     state = {
//         name: 'Mai Cong Ngoan',
//         age: 31
//     }

//     handleClick = (event) => {
//         this.setState({
//             name: 'Le Thi Thuy Linh',
//             age: Math.floor((Math.random() * 9999999) * 9999)
//         })
//         console.log('>>> Click me my button', this.state.name);
//     }

//     handleOnchangeInput = (event) => {
//         // console.log(event.target.value);
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnchangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
    
//     handleOnSubmit = (event) => {
//         event.preventDefault()
//         // console.log(this.state);
//         const newUser = {
//             id: Math.floor((Math.random() * 9999999) * 99) + '-random',
//             name: this.state.name,
//             age: +this.state.age,
//         }
//         this.props.handleAddNewUser(newUser);
//         this.setState({
//             name: '',
//             age: ''
//         })
//     }
//     render(){
//         return (
//             <div>
//                 My name is {this.state.name}, {this.state.age} years old.
//                     <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
//                         <input
//                             value={this.state.name}
//                             placeholder="Name"
//                             type="text" 
//                             onChange={(event) => {this.handleOnchangeInput(event)}}
//                         />
//                         <input
//                             value={this.state.age}
//                             placeholder="Age"
//                             type="text" 
//                             onChange={(event) => {this.handleOnchangeAge(event)}}
//                         />
//                         <br />
//                         <button>Submit</button>
//                     </form>
//             </div>
//         );
//     }
// };

AddUserInfo.propTypes = {
    handleAddNewUser: PropTypes.func
};

function AddUserInfo(props) {

    const { handleAddNewUser } = props

    const [ name, setName ] = useState('Mai Cong Ngoan')
    const [ age, setAge ] = useState(55)
    
    const handleOnchangeInput = (event) => {
        setName(event.target.value)
    }
    
    const handleOnchangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            id: Math.floor((Math.random() * 9999999) * 99) + '-random',
            name: name,
            age: +age,
        }
        handleAddNewUser(newUser);
        setName('')
        setAge('')
    }
    
    return (
        <div>
            My name is {name}, {age} years old.
                <form onSubmit={(event) => {handleOnSubmit(event)}}>
                    <input
                        value={name}
                        placeholder="Name"
                        type="text" 
                        onChange={(event) => {handleOnchangeInput(event)}}
                    />
                    <input
                        value={age}
                        placeholder="Age"
                        type="text" 
                        onChange={(event) => {handleOnchangeAge(event)}}
                    />
                    <br />
                    <button>Submit</button>
                </form>
        </div>
    );
}

export default AddUserInfo;