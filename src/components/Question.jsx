import React from 'react'
import { useState } from 'react'

export default function Question(props){
    // I need to shuffle the incorrect answer and correct answer and only display with original order once in a component lifecycle
    // set initial state as a callback function will help me achieve this effect
    const [answers, setAnswers] = useState(()=> setAllAnswers(props.correctAnswer, props.incorrectAnswers))

    function setAllAnswers(correctAnswer, incorrectAnswers){
        const randomPosition = Math.floor(Math.random()*3)
        console.log(randomPosition)
        let answerList = incorrectAnswers
        console.log(answerList)
        answerList.splice(randomPosition, 0, correctAnswer)

        return answerList

    }
    return(
        <div className='question-container'>
            <h2 className='question'>{props.question}</h2>
            <h5 className='answers'>{answers}</h5>
        </div>
    )
}