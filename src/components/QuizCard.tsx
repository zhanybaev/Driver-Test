import { useEffect, useState } from 'react';
import './Card.css'
import { IProgress, IQuiz } from '../types/quiz.types';
import { useNavigate } from 'react-router-dom';
import { updateProgress } from '../utils/functions';

interface IProps{
    progress:IProgress,
    setProgress(obj:IProgress): void,
    question: IQuiz,
    limit: number,
    topicName:string
}
const QuizCard = ({ progress, setProgress, question, limit, topicName}:IProps):JSX.Element => {
    const [selected, setSelected] = useState<null | string>(null)
    const [error, setError] = useState<boolean | string>('')
    const navigate = useNavigate()
    
    const handleSelect = (i:string) =>{
        if(selected===i && selected===question.answer){
            return 'select'
        }else if(selected===i && selected!==question.answer){
            return 'wrong'
        }else if( i===question.answer){
            return 'select'
        }
    }

    const handleCheck = (i:string) =>{
        setSelected(i)
        if(i===question.answer){
            setProgress({
                ...progress,
                score: progress.score + 1
            })
        }
        setError(false)   
    }
    
    const handleNext = () => {
        if(progress.currentQuestion===limit){
            navigate('/result')
        }else if(selected){
            setProgress({
                ...progress,
                currentQuestion: progress.currentQuestion + 1
            })
            setSelected(null)
        }else{
            setError('Please select an option first')
        }
    }

    useEffect(()=>{
        updateProgress(topicName, progress)
    }, [progress])

    return (
        <div>
            <h1>Question {progress.currentQuestion+1}</h1>
            <h2>{question.question}</h2>
            <h3>Score {progress.score}</h3>
            <div className="options">
                {error && <div>{error}</div>}
                {
                    question.options.map((item)=>(
                        <button
                            onClick={()=>handleCheck(item)}
                            className={`singleOption ${selected && handleSelect(item)}`}
                            key={item}
                            disabled={!!selected}
                            style={{margin:'10px'}}
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
            <div className="controls">
                <button onClick={()=>navigate('/')} >Quit</button>
                <button onClick={handleNext}>Next question</button>
            </div>
        </div>
    );
};

export default QuizCard;