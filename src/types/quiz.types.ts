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