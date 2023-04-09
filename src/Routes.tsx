import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import QuizPage from './pages/Quiz';
import ResultPage from './pages/Result';

const MainRoutes = ():JSX.Element => {
    return (
       <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/quiz/:topicName' element={<QuizPage/>} />
            <Route path='/result/:topicName' element={<ResultPage/>} />
       </Routes>
    );
};

export default MainRoutes;