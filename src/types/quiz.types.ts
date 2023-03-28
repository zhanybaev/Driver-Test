export interface quiz {
    question: string,
    answer: string,
    options: Array<string>
}

export interface quizTheme {
    id:string,
    topicName: string,
    quiz: Array<quiz>
}