import React, { useState } from 'react';
import PropTypes from 'prop-types';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const [count, setCount] = useState(0)

    return (
        <div className='p-count'>
            <h3>Count</h3>
            {count}
            <button onClick={() => setCount(x => x + 1)}>Tăng 1 đơn vị</button>
        </div>
    );
}

export default CounterFeature;