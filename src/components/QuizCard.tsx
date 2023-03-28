import React from 'react';
import { IQuiz } from '../types/quiz.types';

interface IProps{
    question: IQuiz,
    checkIsCorrect(answer:string):void,
    showCorrect(answer:string):string
}
const QuizCard = ({question, checkIsCorrect, showCorrect}:IProps):JSX.Element => {
    return (
        <div>
            <h2 className='subTitle' >{question.question}</h2>
            <div className='options'>
                {
                    question.options.map((item)=>(
                        <button 
                            className={showCorrect(item)}
                            key={`key-${item}`}
                            onClick={()=>checkIsCorrect(item)} 
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default QuizCard;