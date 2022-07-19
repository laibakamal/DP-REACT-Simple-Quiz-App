import './App.css';
import axios from 'axios';
import QuestionStatements from './components/QuestionStatements';
import React, {useState, useEffect} from 'react';
import ScoreBoard from './components/ScoreBoard';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
function App() 
{

  //useState takes the initial value of an object and
  //returns an array with the current value and a function to update it.
  //Here we are getting the initial value of the array(questions) which is empty.
  //And receiving the updated array into "questions" and the function to
  //update it into "setQuestions".

  //questions array will get the statements of all mcqs.
  //setQuestions function will update the questions array.
  const [questions, setQuestions] = useState([]);

  //currentQuestion will get the current question index.
  //setCurrentQuestion function will update the currentQuestion index.
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //score will get the current score.
  //setScore function will update the score.
  const [score, setScore] = useState(0);

  //correct_answers will get the correct answers count.
  //setCorrectAnswers function will update the correct answers count.
  const [correct_answers, setCorrectAnswers] = useState(0);

  //incorrect_answers will get the incorrect answers count.
  //setIncorrectAnswers function will update the incorrect answers count.
  const [incorrect_answers, setIncorrectAnswers] = useState(0);

  //to show the correct ans after user solves a question:
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);


  //useEffect is a hook that runs after the component is rendered.
  useEffect(() => 
  {
    //axios.get is used to get the data from the API.
    axios.get(API_URL)
    .then(response => response.data)//response.data is the data from the API.
    .then(data => {
       const questions=data.results.map((question) => (
        {
          ...question,
          answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5),
        }))
      setQuestions(questions);
    })
  }, []);


  //this function is gonna handle the click event of the 
  //option buttons.
  const handleAnswerClick = (answer) => 
  {
      //if the answer is correct, increment the score and count of correct answers.
      if(answer===questions[currentQuestion].correct_answer)
      {
        setScore(score+1);
        setCorrectAnswers(correct_answers+1);
      }
    //else if the answer is incorrect, increment the count of incorrect answers.
    else
    {
      setIncorrectAnswers(incorrect_answers+1);
    }
    setShowCorrectAnswer(true);    
  }
  

  const handleNextQuestion = () =>
  {
    setCurrentQuestion(currentQuestion+1);
    setShowCorrectAnswer(false);
  }
  return (
    //if the data is not fetched from the API so far, then "LOADING..." will be displayed.
    //else, the QuestionStatements component will be displayed.
    questions.length > 0 ? (
      <div className="container">
        {
          //if the current question is less than the total questions, 
          //render the question statements.
          //else if the current question is equal to the total questions,
          //render the score board.
          currentQuestion >= 10 ? 
            (<ScoreBoard score={score} correct_answers={correct_answers} incorrect_answers={incorrect_answers}/>) :
            (<QuestionStatements data={questions[currentQuestion]} handleAnswerClick={handleAnswerClick} handleNextQuestion={handleNextQuestion} showCorrectAnswer={showCorrectAnswer }/>)
        }
      </div>
    ) : <div className="container"><h1>LOADING...</h1></div>
  );
}

export default App;
