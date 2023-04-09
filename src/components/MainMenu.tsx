import { data } from '../utils/data'
import QuizCard from './QuizCard';

const MainMenu = ():JSX.Element => {    
    return (
        <div className='mainMenu'>
            <div className='head'>
                <h1 className="headText">Commercial Driver's License (CDL) <br /> Class A</h1>
                <h2 className='subTitle'>Written Tests (Permit)</h2>
            </div>
            <div className="quiz-section">
                {
                    data.map(item=>(
                        <QuizCard key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    );
};

export default MainMenu;