import React, {useState} from 'react';
import HomePage from './components/HomePage';
import Quiz from "./components/Quiz";
import { jsQuiz } from "./constants";



function App() {
  const [quizStarted, setQuizStarted] = useState(false);
 
  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="app">
      {!quizStarted ? <HomePage startQuiz={startQuiz} /> : <Quiz questions={jsQuiz.questions}/>}
    </div>
  );
}

export default App;
