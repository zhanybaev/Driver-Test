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
    progress:IProgress ,
}

export type ActionType = 
| { type: 'SET_CURRENT_QUIZ', payload:IQuizTheme}
| { type: 'UPDATE_PROGRESS', payload:IProgress}

export interface IQuizContextProvider{
    children: JSX.Element | JSX.Element[]
}

export interface IQuizContext{
    quiz:IQuizTheme,
    progress: IProgress,
    setQuiz:(topicName:string)=>void,
    updateProgress:(topicName:string, progressObj:IProgress)=>void
}