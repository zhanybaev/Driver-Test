import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { initialProgress } from '../utils/consts';
import { getProgress, updateProgress } from '../utils/functions';

const Result = ():JSX.Element => {
    const { topicName } = useParams()
    const { score } = getProgress(topicName)
    const { complete } = getProgress(topicName)
    const { currentQuestion: questions } = getProgress(topicName)
    const navigate = useNavigate()

    const endQuiz = (navigateTo:string) => {
        updateProgress(topicName, initialProgress)
        navigate(navigateTo)
    }
    
    return (
        <div>
            {
                complete ? (
                    <>
                        <h2>{score}/{questions+1}</h2>
                        <button onClick={()=>endQuiz(`/quiz/${topicName}`)}>Take the quiz again</button>
                        <button onClick={()=>endQuiz(`/`)}>Back to menu</button>
                    </>
                ) : (
                    <>
                        <h2>Вы еще не прошли тест</h2>
                        <button onClick={()=>endQuiz(`/quiz/${topicName}`)}>Take a test</button>
                    </>
                )
            }
        </div>
    );
};

export default Result;