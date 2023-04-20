import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../utils/consts';
import { getProgress } from '../utils/functions';
import QuestionCard from './QuestionCard';
import QuizHeader from './QuizHeader';

const Quiz = ():JSX.Element => {
    const { topicName } = useParams()   
    const quiz = data.find(item=>item.topicName===topicName) || data[0]
    const [progress, setProgress] = useState(getProgress(quiz.topicName))
    const question=quiz.questions[progress.currentQuestion]
    
    return (
        <div className='quiz'>
            <QuizHeader topicName={quiz.topicName}/>
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