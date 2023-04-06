import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../utils/data';
import QuizCard from './QuizCard';

const Quiz = ():JSX.Element => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0) 
    const { topicName } = useParams()   
    const quiz = data.find(item=>item.topicName===topicName) || data[0]
    const question=quiz.questions[currentQuestion]

    // const shuffleOptions = useCallback(()=>{
    //     quiz.questions[currentQuestion].options.sort(()=>Math.random()-0.5)
    //     console.log('shuffle', quiz.questions[currentQuestion].options);
    // }, [currentQuestion, quiz.questions])     

    // useEffect(()=>{
        // shuffleOptions()        
    // }, [currentQuestion])
    
    return (
        <div>
            <QuizCard 
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                question={question}
                score={score}
                setScore={setScore}
                limit={quiz.questions.length}
            />
        </div>
    );
};

export default Quiz;