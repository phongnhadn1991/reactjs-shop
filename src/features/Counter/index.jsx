import React, { useState } from 'react';
import PropTypes from 'prop-types';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const [count, setCount] = useState(0)
    // CLASS JAVASCRIPT
    class Person {
        constructor(name, address) {
            this.name = name;
            this.address = address;
        }

        getAddress() {
            return 'I live in ' + this.address
        }
    }

    const test = new Person("Mai Công Ngoãn", "Đà Nẵng")
    console.log(">>> check test", test);
    console.log(">>> check test", test.getAddress());

    // OBJECT JAVSCRIPT
    console.clear();
    const person = {
        name: 'Ngoãn',
        age: 31,
        "eyecolor": 'black'
    }
    console.log(">> Get by Object: ",person.name);
    console.log(">> Get by Array: ",person["name"]);

    // ARRAY JAVASCRIPT
    console.clear();
    const personArray = [
        'Ngoãn',31,'black'
    ]
    console.log(">> Name: ",personArray[0]);

    // ARROW FUNCTION
    console.clear();
    const testFuntion = (value) => { console.log(value) }
    testFuntion('MCN')

    // TEMPLATE STRING
    console.clear();
    const base_url = "localhost:8000"
    const api = "get-user"
    const fetch_page = 2
    const result = `${base_url}/${api}?page=${fetch_page}`
    console.log(result);

    // JAVASCRIPT THREE DOT
    console.clear();
    const numbersOne = [1,2,3]
    const numbersTwo = [4,5,6]
    const mergeOneTwo = [...numbersOne, ...numbersTwo]
    mergeOneTwo.push(7)
    mergeOneTwo.unshift(0)
    console.log(mergeOneTwo);
    const newMergeOneTwo = [...mergeOneTwo, 8]
    console.log(newMergeOneTwo);

    // Object bên phải ghi đè bên trái
    const state = {
        name: 'MCN',
        age: 31
    }
    const resultState = {...state, age: 30}
    console.log(resultState);

    // Destructuring
    console.clear();
    const desPerson = {
        name: 'MCN',
        age: 31,
        eye: 'black'
    }
    const {age,name} = desPerson
    console.log(age,name);

    // ĐIỀU KIỆN
    console.clear();
    const dkX = 10
    dkX > 5 ? console.log('>5') : console.log('<5');




    return (
        <div className='p-count'>
            <h3>Count</h3>
            {count}
            <button onClick={() => setCount(x => x + 1)}>Tăng 1 đơn vị</button>
        </div>
    );
}

export default CounterFeature;