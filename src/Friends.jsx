import React, { useEffect, useState } from 'react';
import './Friends.css'
import Friend from './Friend';

const Friends = () => {
    const [friends,setFriends] =useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div>
            <h3 className='box'>Friends {friends.length}</h3>
            {
                friends.map(friend =><Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;