import React, { useState } from 'react';



const Counter = () => {
    const [count,setCount] =useState(0)
    return (
        <div>
            <h3>Counter: </h3>
        </div>
    );
};

export default Counter;