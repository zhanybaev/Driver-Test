import { IProgress } from "../types/quiz.types"

export const getProgress=(topicName:string):IProgress=>{
    if(!sessionStorage.getItem(topicName)){
        const obj = {
            currentQuestion : 0,
            score: 0 
        }
        sessionStorage.setItem(topicName, JSON.stringify(obj))
        return obj
    }else{
        return JSON.parse(sessionStorage.getItem(topicName) || '')
    }
}

export const updateProgress=(topicName:string, progressObj:IProgress):void=>{
    sessionStorage.setItem(topicName, JSON.stringify(progressObj))
}