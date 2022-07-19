import './App.css';
import axios from 'axios';
import QuestionStatements from './components/QuestionStatements';
import React, {useState, useEffect} from 'react';
import ScoreBoard from './components/ScoreBoard';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
function App() {

  //useState takes the initial value of an object and
  //returns an array with the current value and a function to update it.
  //Here we are getting the initial value of the array which is empty.
  //And receiving the updated array into "questions" and the function to
  //update it into "setQuestions".

  const [questions, setQuestions] = useState([]);

  //
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correct_answers, setCorrectAnswers] = useState(0);
  const [incorrect_answers, setIncorrectAnswers] = useState(0);

  useEffect(() => {
    axios.get(API_URL)
    .then(response => response.data)
    .then(data => {
       const questions=data.results.map((question) => (
        {
          ...question,
          answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5),
        }))
      setQuestions(questions);
    })
  }, []);


  const handleAnswerClick = (answer) => {
    if(answer===questions[currentQuestion].correct_answer)
    {
      setScore(score+1);
      setCorrectAnswers(correct_answers+1);
    }
    else
    {
      setIncorrectAnswers(incorrect_answers+1);
    }
    setCurrentQuestion(currentQuestion+1);
  }
  return (
    questions.length > 0 ? (
      <div className="container">
        {
          currentQuestion >= 10 ? 
            (<ScoreBoard score={score} correct_answers={correct_answers} incorrect_answers={incorrect_answers}/>) :
            (<QuestionStatements data={questions[currentQuestion]} handleAnswerClick={handleAnswerClick}/>)
        }
      </div>
    ) : <div className="container"><h1>LOADING...</h1></div>
  );
}

export default App;
