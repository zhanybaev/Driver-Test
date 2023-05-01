import React from 'react';
import { useNavigate } from 'react-router-dom';
import { initialProgress } from '../utils/consts';
import { getProgress } from '../utils/functions';
import { useQuiz } from '../QuizContext';

const Result = ():JSX.Element => {
    const {updateProgress, quiz, setSelected} = useQuiz()
    const topicName  = quiz.topicName
    const { score, complete, currentQuestion: questions } = getProgress(topicName)
    const navigate = useNavigate()

    const endQuiz = (navigateTo:string) => {
        updateProgress(topicName, initialProgress)
        setSelected(null)
        navigate(navigateTo)
    }
    
    return (
        <div className='result'>
            <div className="container">
                <div className="result__content">
                    {
                        complete ? (
                            <>
                                <p className='result__value'>
                                    <span className='finalScore'>{score}</span>
                                    <span className='questionAmount'>/{questions+1}</span>
                                </p>
                                <div className="result__content-text">
                                Congratulations on finishing the quiz! 
                                <br />You should be proud of yourself for sticking with it until the very end. It takes dedication and determination to see something through to completion, and you have demonstrated both of these qualities today. Whether you aced the quiz or struggled a bit, the most important thing is that you challenged yourself and learned something new. Keep up the great work and continue to push yourself towards new achievements!
                                </div>
                                <div className="navigation-buttons">
                                    <button onClick={()=>endQuiz(`/quiz/${topicName}`)}>Take the quiz again</button>
                                    <button onClick={()=>endQuiz(`/`)}>Back to menu</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{textAlign:'center'}} className="result__content-text">
                                You have not taken the test yet 
                                <br />Please make sure to complete the quiz. We believe in you and know that you have what it takes to succeed.
                                </div>
                                <div style={{justifyContent:'center'}} className="navigation-buttons">
                                    <button onClick={()=>endQuiz(`/quiz/${topicName}`)}>Take a test</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Result;