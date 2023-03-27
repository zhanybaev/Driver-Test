import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../utils/data';

const Quiz = ():JSX.Element => {
    const {topic} = useParams()
    const quiz = data.find(item=>item.topic===topic)
    console.log(quiz);
    
    return (
        <div>
            <h1>Quiz</h1>
        </div>
    );
};

export default Quiz;