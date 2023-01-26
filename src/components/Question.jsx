import React from 'react'
import { useState } from 'react'

export default function Question(props){
    // shuffle the incorrect answer and correct answer and only display with original order once in a component lifecycle
    // set initial state as a callback function will help me achieve this effect
    const [answers, setAnswers] = useState(()=> shuffleAllAnswers(props.correctAnswer, props.incorrectAnswers))


    function decodeHtml(question) {
        var txt = document.createElement('textarea');
        txt.innerHTML = question;
        return txt.value;
      }

    function shuffleAllAnswers(correctAnswer, incorrectAnswers){
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
            {answers.map(answer => {
                let backgroundColor
                if (!props.showScore && answer === props.selectedAnswer){
                    backgroundColor = '#D6DBF5'
                }else if (props.showScore && answer === props.correctAnswer){
                    backgroundColor = "#94D7A2"
                }else if(props.showScore && answer != props.correctAnswer && answer === props.selectedAnswer){
                    backgroundColor = '#F8BCBC'
                }else{
                    backgroundColor = undefined
                }

       
                return <button
                                           className='answer--btn' 
                                           style = {{backgroundColor}}
                                           onClick = {() => props.handleClick(props.question, answer)}
                                           
                                           key= {answer}
                                        
                                           >{answer}</button>
            })}
            <br></br>
        </div>
    )
}