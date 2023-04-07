import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../utils/data';
import { getProgress } from '../utils/functions';
import QuizCard from './QuizCard';

const Quiz = ():JSX.Element => {
    const { topicName } = useParams()   
    const quiz = data.find(item=>item.topicName===topicName) || data[0]
    const [progress, setProgress] = useState(getProgress(quiz.topicName))
    const question=quiz.questions[progress.currentQuestion]

    // const shuffleOptions = useCallback(()=>{
    //     quiz.questions[currentQuestion].options.sort(()=>Math.random()-0.5)
    //     console.log('shuffle', quiz.questions[currentQuestion].options);
    // }, [currentQuestion, quiz.questions])     

    
    return (
        <div>
            <QuizCard 
                // currentQuestion={currentQuestion}
                // setCurrentQuestion={setCurrentQuestion}
                progress={progress}
                setProgress={setProgress}
                question={question}
                limit={quiz.questions.length}
                topicName={quiz.topicName}
            />
        </div>
    );
};

export default Quiz;