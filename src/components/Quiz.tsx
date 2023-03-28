import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IQuizTheme } from '../types/quiz.types';
import { data } from '../utils/data';
import QuizCard from './QuizCard';

const Quiz = ():JSX.Element => {
    const { topicName } = useParams()    
    const [ currentQuestion, setCurrentQuestion ] = useState<number>(0)
    const [correctAnswers, setCorrectAnswers] = useState<number>(0)
    const [modal, setModal] = useState<boolean>(false)
    const [showIsCorrect, setShowIsCorrect] = useState<boolean>(false)
    const quiz:IQuizTheme = data.find(item=>item.topicName===topicName) || data[0]

    const checkIsCorrect = (answer:string) => {
        if(quiz.quiz[currentQuestion].answer===answer){
            const nextQuestion = currentQuestion + 1
            setCorrectAnswers((prev)=>prev+1)
            if(nextQuestion>=quiz.quiz.length)setModal(true)
            else {
                setCurrentQuestion(nextQuestion)
                setShowIsCorrect(false)
            }
        }else{
            setShowIsCorrect(true)
        }
    }

    const showCorrect = (answer:string):string => {
        if(showIsCorrect){
            if(answer===quiz.quiz[currentQuestion].answer) return 'correct'
            else return 'wrong'
        }
        return ''
    }
    
    return (
        <div>
            <h1 className='headText'>{quiz.topicName}</h1>
            {
                modal ? <>Your score is{correctAnswers}</> : (
                    <QuizCard showCorrect={showCorrect} checkIsCorrect={checkIsCorrect} question={quiz.quiz[currentQuestion]}/>
                ) 
            }
            <Link style={{textAlign:'center', display:'block', marginTop:'100px'}} to='/'>
                GO TO MENU
            </Link>
        </div>
    );
};

export default Quiz;