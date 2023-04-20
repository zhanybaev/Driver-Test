import { initialProgress } from "../utils/consts";
import { updateProgress } from "../utils/functions";

const QuizHeader = ({topicName}:{topicName:string}) => {
    return (
        <header>
            <nav>
                <div className="nav__item nav__item-title">{topicName.replace("-"," ")} quiz</div>
                <button onClick={()=>updateProgress(topicName, initialProgress)} className="nav__item nav__item-btn">
                    Reset quiz
                </button>
            </nav>
        </header>
    );
};

export default QuizHeader;