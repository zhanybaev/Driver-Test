import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { useQuiz } from '../QuizContext';
const arrowIcon: string = require("../assets/icons/arrow.svg").default;
const quitIcon: string = require("../assets/icons/quit-icon.svg").default;

interface IControlBarProps{
    limit:number,
    topicName:string
}

const ControlBar = ({limit, topicName}:IControlBarProps):JSX.Element => {
    const navigate=useNavigate()
    const { progress, updateProgress, selected, setSelected, setError } = useQuiz()

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
        <div className="controls">
            <button onClick={()=>navigate('/')}><img src={quitIcon} alt="quit icon"/> Quit</button>
            <ProgressBar completed={Math.floor(100*(progress.currentQuestion/limit))}/>
            <button onClick={handleNext}>Next question <img src={arrowIcon} alt="quit icon"/></button>
        </div>
    );
};

export default ControlBar;