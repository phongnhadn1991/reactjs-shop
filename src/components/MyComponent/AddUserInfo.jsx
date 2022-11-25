import React from 'react';

class AddUserInfo extends React.Component {
    
    state = {
        name: 'Mai Cong Ngoan',
        age: 31
    }

    handleClick = (event) => {
        this.setState({
            name: 'Le Thi Thuy Linh',
            age: Math.floor((Math.random() * 9999999) * 9999)
        })
        console.log('>>> Click me my button', this.state.name);
    }

    handleOnchangeInput = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state);
        const newUser = {
            id: Math.floor((Math.random() * 9999999) * 99) + '-random',
            name: this.state.name,
            age: +this.state.age,
        }
        this.props.handleAddNewUser(newUser);
        this.setState({
            name: '',
            age: ''
        })
    }
    render(){
        return (
            <div>
                My name is {this.state.name}, {this.state.age} years old.
                    <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                        <input
                            value={this.state.name}
                            placeholder="Name"
                            type="text" 
                            onChange={(event) => {this.handleOnchangeInput(event)}}
                        />
                        <input
                            value={this.state.age}
                            placeholder="Age"
                            type="text" 
                            onChange={(event) => {this.handleOnchangeAge(event)}}
                        />
                        <br />
                        <button>Submit</button>
                    </form>
            </div>
        );
    }
};

export default AddUserInfo;