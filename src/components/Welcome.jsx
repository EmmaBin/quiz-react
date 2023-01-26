import React from 'react'

export default function Welcome(props){
    return(
        <div className='welcome--container'>
            <h1 className='welcome--title'>
                Quizzical
            </h1>
            <h4>Let's have some fun, see how many points you can score!</h4>
            <button className='welcome--btn' onClick={props.handleClick}>Start Game</button>
        </div>
    )
}