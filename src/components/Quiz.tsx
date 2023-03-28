import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizTheme } from '../types/quiz.types';
import { data } from '../utils/data';
import QuizCard from './QuizCard';

const Quiz = ():JSX.Element => {
    const { topicName } = useParams()    
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const quiz:quizTheme = data.find(item=>item.topicName===topicName) || data[0]
    
    return (
        <div>
            <h1>{quiz.topicName}</h1>
            <QuizCard question={quiz.quiz[currentQuestion]}/>
        </div>
    );
};

export default Quiz;