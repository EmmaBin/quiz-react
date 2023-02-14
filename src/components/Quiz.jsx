/**
 * 
 * when the page first time loaded, two things I want to achieve->1. store the questions array 2. build Question component
 *
 * after user chooses all questions:
 * 1. btn color changed, need to document user's pick, 
 * 2. after five questions answered, enable the check answer btn and tally the answer
 * 3. display correct answer by showing a different color and display the number of the correct answer
 * 4. display 'start new game' btn,  
 * 
 */


import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Question from './Question'

export default function Quiz() {
    // these two arrays are paired, user selected answer to questions[i] is at answers[i]
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [showScore, setShowScore] = useState(false)
    const [newGame, setNewGame] = useState(false)
    // readyToScore is to determine the btn disable functionality 
    let readyToScore = answers.filter(answer => typeof answer != 'undefined').length === questions.length


    function handleAnswerClick(questionStr, answerStr) {
        //create a answer array copy with the new answer every time, so react will rerender 
        const answerCopy = [
            ...answers,
        ]

        const questionIndex = questions.findIndex((question) => question.question === questionStr)
        //answerCopy array 
        answerCopy[questionIndex] = answerStr
        console.log(answers)
        return (
            setAnswers(answerCopy)

        )
    }

    // save an arr of objects inside [questions]
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(data => data.json())
            .then(res => {
                setQuestions(res.results)
                setAnswers([])
            })

    }, [newGame])


    function checkScore() {
        let correctAnswer = 0
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === questions[i].correct_answer) {

                correctAnswer++
            }
        }
        return correctAnswer

    }


    function startNewGame() {
        setNewGame(pre => !pre)
        setShowScore(false)
        setAnswers([])
    }
    return (
        <div className='quiz-component'>
            <div className='quiz--page'>
                {questions.map((result, index) =>
                    <Question question={result.question}
                        key={result.question}
                        incorrectAnswers={result.incorrect_answers}
                        correctAnswer={result.correct_answer}
                        selectedAnswer={answers[index]}
                        handleClick={handleAnswerClick}
                        showScore={showScore}
                    />
                )}

                <div className='check--container'>

                    {!showScore && <button className='score--btn' onClick={() => setShowScore(true)} disabled={!readyToScore}>Check answers</button>}

                    {showScore && `You scored ${checkScore()}/5 correct answers`}
                    {showScore && <button className='new-game-btn' onClick={startNewGame}>Start new game</button>}


                </div>

            </div>
        </div>
    )
}
