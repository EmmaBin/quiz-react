import React from 'react'
import { useState } from 'react'

export default function Question(props){
    // I need to shuffle the incorrect answer and correct answer and only display with original order once in a component lifecycle
    // set initial state as a callback function will help me achieve this effect
    const [answers, setAnswers] = useState(()=> setAllAnswers(props.correctAnswer, props.incorrectAnswers))

    function decodeHtml(question) {
        var txt = document.createElement('textarea');
        txt.innerHTML = question;
        return txt.value;
      }

    function setAllAnswers(correctAnswer, incorrectAnswers){
        const randomPosition = Math.floor(Math.random()*3)
        correctAnswer = decodeHtml(correctAnswer)

        let answerList = incorrectAnswers.map(answer => decodeHtml(answer))
      
        answerList.splice(randomPosition, 0, correctAnswer)

        return answerList

    }
    return(
        <div className='question-container'>
            {/*'company&#039;s logo is the &#039;' HTML entities displayed on the screen, decode function will help*/}
            <h2 className='question'>{decodeHtml(props.question)}</h2>
            <h5 className='answers'>{answers}</h5>
        </div>
    )
}