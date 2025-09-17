import React, { useState } from 'react';

const Tems = () => {

    const [player,setPlayer] =useState(14);
    const addPlayers =() =>{
        const newplayers =player +1;
        setPlayer(newplayers)
    }
    const removePlayers =() =>{
        const newplayers =player-1;
        setPlayer(newplayers)
    }

    const teamStyle ={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return (
        <div style={teamStyle}>
            <h2>Players:{player} </h2>
        <button onClick={addPlayers}>Add</button>
        <button onClick={removePlayers}>remove</button>
        </div>
    );
};

export default Tems;