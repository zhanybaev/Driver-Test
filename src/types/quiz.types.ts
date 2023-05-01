export interface IQuiz {
    question: string,
    answer: string,
    options: Array<string>
}

export interface IQuizTheme {
    id:string,
    topicName: string,
    questions: Array<IQuiz>
}

export interface IProgress {
    currentQuestion: number,
    score:number,
    complete: boolean
}

export interface IState{
    quiz:IQuizTheme,
    progress:IProgress,
    error:boolean | string,
    selected: null | string
}

export type ActionType = 
| { type: 'SET_CURRENT_QUIZ', payload:IQuizTheme}
| { type: 'UPDATE_PROGRESS', payload:IProgress}
| { type: 'SET_ERROR', payload:boolean|string}
| { type: 'SET_SELECTED', payload:null|string}


export interface IQuizContextProvider{
    children: JSX.Element | JSX.Element[]
}

export interface IQuizContext{
    quiz:IQuizTheme,
    progress: IProgress,
    error:boolean|string,
    selected:null|string,
    setQuiz:(topicName:string)=>void,
    updateProgress:(topicName:string, progressObj:IProgress)=>void,
    setError:(errorMessage:string|boolean)=>void,
    setSelected:(selectedOption:string|null)=>void,
}