import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../utils/data';
import { getProgress } from '../utils/functions';
import QuestionCard from './QuestionCard';

const Quiz = ():JSX.Element => {
    const { topicName } = useParams()   
    const quiz = data.find(item=>item.topicName===topicName) || data[0]
    const [progress, setProgress] = useState(getProgress(quiz.topicName))
    const question=quiz.questions[progress.currentQuestion]
    
    return (
        <div>
            <QuestionCard 
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