import { createContext, useContext, useReducer } from "react";
import { initialProgress } from "./utils/consts";
import { data } from "./utils/consts";
import { IQuizContextProvider, IState, ActionType, IProgress, IQuizContext } from "./types/quiz.types";
import { setProgress } from "./utils/functions";

const INIT_STATE:IState={
    quiz:data[0],
    progress:initialProgress,
    error:false,
    selected:null
}

export const quizContext = createContext<IQuizContext>({} as IQuizContext)
export const useQuiz = () => useContext(quizContext)

const reducer = (state=INIT_STATE, action:ActionType):IState=>{
    switch(action.type){
        case "SET_CURRENT_QUIZ" :
            return {...state, quiz:action.payload}
        case "UPDATE_PROGRESS":
            return {...state, progress:action.payload}
        case "SET_ERROR":
            return {...state, error:action.payload}
        case "SET_SELECTED":
            return {...state, selected:action.payload}
        default:
            return state
    }
}

const QuizContextProvider = ({ children }:IQuizContextProvider) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const updateProgress = (topicName:string='air-breaks', progressObj:IProgress) => {
        setProgress(topicName, progressObj)
        dispatch({
            type:"UPDATE_PROGRESS",
            payload: progressObj
        })
    }

    const setQuiz = (topicName:string) => {
        const quiz = data.find(item=>item.topicName===topicName) || data[0];
        dispatch({
            type:"SET_CURRENT_QUIZ",
            payload:quiz
        })
    }

    const setError = (errorMessage:string|boolean) => {
        dispatch({
            type:"SET_ERROR",
            payload:errorMessage
        })
    }

    const setSelected = (selected:null|string) => {
        dispatch({
            type:"SET_SELECTED",
            payload:selected
        })
    }

    return (
        <quizContext.Provider
            value={{
                quiz:state.quiz,
                progress: state.progress,
                error:state.error,
                selected:state.selected,
                setQuiz,
                updateProgress,
                setError,
                setSelected
            }}
        >
            {children}
        </quizContext.Provider>
    )
};

export default QuizContextProvider;
