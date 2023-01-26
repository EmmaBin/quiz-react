import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import Question from './Question'

export default function Quiz(){
// when the page first time loaded, two things I want to achieve->1. store the questions array 2. build Question component

// after user chooses the answer:1. btn color changed, need to document user's pick, 
//                               2. after five questions answered, enable the check answer btn and tally the answer
//                               3. display correct answer by showing a color and display the correct number of the answer
//                               4. display 'start new game' btn, 



    const [questions, setQuestions] = useState([]) 
    const [answers, setAnswers] = useState([])
    const [showScore, setShowScore]= useState(false)
    //when new game btn being clicked, false => true, when it's true, disable new game btn, disable score displaying, 
    //show the reveal score btn
    const [newGame, setNewGame] = useState(false)
    let readyToScore= answers.filter(answer => typeof answer!= 'undefined').length === questions.length 
    // const [clickColor, setClickColor] = useState(false)
    

    function handleQuestionClick(questionStr, answerStr){
        //create a answer array copy with the new answer every time, so react will rerender 
        //corresponding answer to its question, checking with questions arr, they are pair arr

        const answerCopy=[
            ...answers,
        ]
      
        const questionIndex = questions.findIndex((question)=> question.question === questionStr)
        answerCopy[questionIndex] = answerStr
        console.log(answers)
        return(
            setAnswers(answerCopy)
           
        )
    }
    
    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then(data => data.json())
        .then(res => setQuestions(res.results)
        )  
        // console.log(newGame)
    },[newGame])


    function checkScore(){
        let correctAnswer = 0
        for (let i=0; i<answers.length; i++){
            if (answers[i]===questions[i].correct_answer){

                correctAnswer++
            }
        }
        return correctAnswer
        
    }

    function startNewGame(){
        setNewGame(pre => !pre)
        setShowScore(false)
        readyToScore = false
        console.log(readyToScore)

    }
    return(
        <div className='quiz-component'>
        <div className='quiz--page'>
        {questions.map((result, index) => 
           <Question question={result.question} 
                    key={result.question}
                    incorrectAnswers={result.incorrect_answers}
                    correctAnswer={result.correct_answer} 
                    // selectedAnswer={/* answer string  from `answers` */}
                    handleClick={handleQuestionClick}
                    
                    
                    />
        )}

        <div className='check--container'>
        
            
        {!showScore && <button className='score--btn' onClick={() =>setShowScore(true)} disabled={!readyToScore}>Check answers</button>}
        
        {showScore && `You scored ${checkScore()}/5 correct answers`}
        {showScore && <button className='new-game-btn' onClick={startNewGame}>Start new game</button>}
        
       
        </div>
        
        </div>
        </div>
    )
}
