import React, { useState } from 'react';
import './Card.css'
import { IQuiz } from '../types/quiz.types';
import { useNavigate } from 'react-router-dom';

interface IProps{
    currentQuestion: number, 
    setCurrentQuestion(callback: (question: number) => number):void,
    question: IQuiz,
    score:number,
    setScore(callback: (question: number) => number):void,
    limit: number
}
const QuizCard = ({currentQuestion, setCurrentQuestion, question, setScore, score, limit}:IProps):JSX.Element => {
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
        if(i===question.answer)setScore((prev)=>prev+1)
        setError(false)   
    }
    
    const handleNext = () => {
        if(currentQuestion===limit){
            navigate('/result')
        }else if(selected){
            setCurrentQuestion((prev)=>prev+1)
            setSelected(null)
        }else{
            setError('Please select an option first')
        }
    }

    return (
        <div>
            <h1>Question {currentQuestion+1}</h1>
            <h2>{question.question}</h2>
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
                <button onClick={()=>navigate('/d')} >Quit</button>
                <button onClick={handleNext}>Next question</button>
            </div>
        </div>
    );
};

export default QuizCard;