import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import QuizPage from './pages/Quiz';

const MainRoutes = ():JSX.Element => {
    return (
       <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/quiz/:topicName' element={<QuizPage/>} />
       </Routes>
    );
};

export default MainRoutes;