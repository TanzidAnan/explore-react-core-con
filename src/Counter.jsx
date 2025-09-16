import React, { useState } from 'react';




const Counter = () => {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce=() =>{
        const newCount =count -1;
        setCount(newCount)
    }
    return (
        <div style={{ border: '2px solid red', borderRadius: '5px' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add button</button>
            <button onClick={handleReduce}>reduch</button>
        </div>
    );
};

export default Counter;
















