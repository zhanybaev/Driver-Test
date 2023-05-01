import { useState } from 'react';
import { IQuiz } from '../types/quiz.types';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Options from './Options';
import { useQuiz } from '../QuizContext';
const arrowIcon: string = require("../assets/icons/arrow.svg").default;

interface IQuestionCardProps{
    question: IQuiz,
    limit: number,
    topicName:string
}
const QuestionCard = ({ question, limit, topicName}:IQuestionCardProps):JSX.Element => {
    const [selected, setSelected] = useState<null | string>(null)
    const [error, setError] = useState<boolean | string>('')
    const { progress, updateProgress, } = useQuiz()
    const navigate = useNavigate()
    
    const handleNext = () => {
        if(progress.currentQuestion===limit-1){
            const result = {
                ...progress,
                complete:true
            }
            updateProgress(topicName, result)
            navigate(`/result/${topicName}`)
        }else if(selected){
            updateProgress(topicName, {
                ...progress,
                currentQuestion: progress.currentQuestion + 1
            })
            setSelected(null)
        }else setError('Please select an option first')
    }

    return (
        <div className='questionCard'>
            <div className="questionCard__block">
                <div className="questionCard__block-question">
                    <div className='questionNumber'>
                        Question {progress.currentQuestion+1} of {limit}
                        <br />
                        <span className="score">score: {progress.score}</span>
                    </div>
                    <h2 className='questionText'>{question.question}</h2>
                </div>
                <div className="options">
                    { question.options.map((item)=>(
                        <Options key={item} item={item} selected={selected} setSelected={setSelected} question={question} setError={setError} />
                    ))}
                </div>
                {error && <div className='errorText'>{error}</div>}
                <div className="controls">
                    <button onClick={()=>navigate('/')}><img src={arrowIcon} alt="quit icon"/> Quit</button>
                    <ProgressBar completed={Math.floor(100*(progress.currentQuestion/limit))}/>
                    <button onClick={handleNext}>Next question <img src={arrowIcon} alt="quit icon"/></button>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;