import { IProgress, IQuiz } from "../types/quiz.types";

interface IOptions{
    item:string,
    selected: null | string, 
    setSelected(selected:string | null):void,
    question: IQuiz,
    progress:IProgress,
    setProgress(obj:IProgress): void,
    setError(error:string|boolean):void
}

const Options = ({item, selected, setSelected, question, progress, setProgress, setError}:IOptions) => {

    const handleCheck = (i:string) =>{
        setSelected(i)
        if(i===question.answer)setProgress({
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