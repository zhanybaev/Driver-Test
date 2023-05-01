import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProgress } from '../utils/functions';
import QuestionCard from './QuestionCard';
import QuizHeader from './QuizHeader';
import { useQuiz } from '../QuizContext';
import ControlBar from './ControlBar';

const Quiz = ():JSX.Element => {
    const { topicName } = useParams()   
    const { progress, updateProgress, quiz, setQuiz } = useQuiz()
    const question=quiz.questions[progress.currentQuestion]
    
    useEffect(()=>{
        setQuiz(topicName || 'air-breaks')
        updateProgress(quiz.topicName, getProgress(quiz.topicName))
    }, [topicName])

    return (
        <div className='quiz'>
            <QuizHeader topicName={quiz.topicName}/>
            <QuestionCard
                question={question}
                limit={quiz.questions.length}
            />
            <ControlBar limit={quiz.questions.length} topicName={quiz.topicName}/>
        </div>
    );
};

export default Quiz;