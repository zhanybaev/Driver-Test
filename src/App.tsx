import React from 'react';
import './App.css'
import MainRoutes from './Routes';
import QuizContextProvider from './QuizContext';

function App() {
  return (
    <QuizContextProvider>
      <MainRoutes/>
    </QuizContextProvider>
  );
}

export default App;
