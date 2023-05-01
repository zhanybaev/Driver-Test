import { IProgress } from "../types/quiz.types"
import { initialProgress } from "./consts"

export const getProgress=(topicName:string='air-breaks'):IProgress=>{
    if(!sessionStorage.getItem(topicName)){
        sessionStorage.setItem(topicName, JSON.stringify(initialProgress))
        return initialProgress
    }else{
        return JSON.parse(sessionStorage.getItem(topicName) || '')
    }
}

export const setProgress=(topicName:string='air-breaks', progressObj:IProgress):void=>{
    sessionStorage.setItem(topicName, JSON.stringify(progressObj))
}