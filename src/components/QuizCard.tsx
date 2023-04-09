import React from 'react';
import { Link } from 'react-router-dom';
import { IQuizTheme } from '../types/quiz.types';

interface IQuizCardProps{
    item:IQuizTheme
}

const QuizCard = ({item}:IQuizCardProps):JSX.Element => {
    return (
        <div key={item.id} className="quizCard">
            <div className="quizCard__content">
                <p className="quizCard__title">{item.topicName}</p>
                <span className='quizCard__description'>{item.questions.length} questions</span>
                <div className="quizCard__link">
                    <Link to={`quiz/${item.topicName}`}>
                        <span className="start-btn">Start test</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;