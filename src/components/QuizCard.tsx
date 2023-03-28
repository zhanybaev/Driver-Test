import React from 'react';
import { quiz } from '../types/quiz.types';

interface IProps{
    question: quiz
}
const QuizCard = ({question}:IProps):JSX.Element => {
    
    return (
        <div>
            <h2>{question.question}</h2>
            {
                question.options.map((item)=>(
                    <button key={`key-${item}`}>{item}</button>
                ))
            }
        </div>
    );
};

export default QuizCard;