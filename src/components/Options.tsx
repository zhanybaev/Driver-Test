import { useQuiz } from "../QuizContext";
import { IQuiz } from "../types/quiz.types";

interface IOptions{
    item:string,
    selected: null | string, 
    setSelected(selected:string | null):void,
    question: IQuiz,
    setError(error:string|boolean):void
}

const Options = ({item, selected, setSelected, question, setError}:IOptions) => {
    const { progress, updateProgress, quiz } = useQuiz()

    const handleCheck = (i:string) =>{
        setSelected(i)
        if(i===question.answer)updateProgress(quiz.topicName, {
            ...progress,
            score: progress.score + 1
        })
        setError(false)   
    }

    const handleSelect = (i:string) =>{
        if(selected===i && selected===question.answer){
            return 'select'
        }else if(selected===i && selected!==question.answer){
            return 'wrong'
        }else if( i===question.answer){
            return 'select'
        }
        return ''
    }

    return (
        <button
            onClick={()=>handleCheck(item)}
            className={`singleOption ${selected && handleSelect(item)}`}
            disabled={!!selected}
        >
            {item}
        </button>
    );
};

export default Options;