import { IQuiz } from '../types/quiz.types';
import Options from './Options';
import { useQuiz } from '../QuizContext';

interface IQuestionCardProps{
    question: IQuiz,
    limit: number,
}
const QuestionCard = ({ question, limit }:IQuestionCardProps):JSX.Element => {
    const { progress, selected, error, setError, setSelected } = useQuiz()

    return (
        <div className='questionCard'>
            <div className="questionCard__block">
                <div className="questionCard__block-question">
                    <div className='questionNumber'>
                        Question {progress.currentQuestion+1} of {limit}
                        <br />
                        <span className="score">score: {progress.score}</span>
                    </div>
                    <h2 className='questionText'>{question.question}</h2>
                </div>
                <div className="options">
                    { question.options.map((item)=>(
                        <Options key={item} item={item} selected={selected} setSelected={setSelected} question={question} setError={setError} />
                    ))}
                </div>
                {error && <div className='errorText'>{error}</div>}
            </div>
        </div>
    );
};

export default QuestionCard;