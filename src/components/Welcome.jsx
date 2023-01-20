import React from 'react'

export default function Welcome(){
    return(
        <div className='welcome--container'>
            <h1 className='welcome--title'>
                Quizzical
            </h1>
            <h4>Let's have some fun, see how many you can score!</h4>
            <button className='welcome--btn'>Start Game</button>
        </div>
    )
}