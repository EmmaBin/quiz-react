import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import Question from './Question'

export default function Quiz(){
// when the page first time loaded, two things I want to achieve->1. store the questions array 2. build Question component

// document user's click(input), after click on check 'check for answer' btn, all five must be chosen, if not disable the check for answer btn 
// display all correct choice(different color),
// check for answer btn will be also change to 'new game' btn and display the score x/5 correct

//选什么，对不对
// one state user answer
    const [questions, setQuestions] = useState([]) 
    // const [answers, setAnswers] = useState([]) [a1, a2, a3]



    
    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then(data => data.json())
        .then(res => setQuestions(res.results)
        )  
    },[])

    return(
        <div className='quiz-component'>
        <div className='quiz--page'>
        {questions.map((result, index) => 
           <Question question={result.question} 
                    key={nanoid()}
                    incorrectAnswers={result.incorrect_answers}
                    correctAnswer={result.correct_answer} 
                    id={nanoid()}
                    // userAnswer={answers[index]}
                    />
        )}

        <div className='check--container'>
        <button className='score--btn'>Check answers</button>
        </div>
        
        </div>
        </div>
    )
}
