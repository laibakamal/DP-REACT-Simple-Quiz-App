
function ScoreBoard(props) 
{
    return (
        <>
            <div className="score-board">
                {console.log(props.score, "   ", props.correct_answers, "  ", props.incorrect_answers)}
                <h3>Score: {props.score}</h3>
                <h3>Attempted Questions: {props.attemptedQuestions}</h3>
                <h3>Correct Answers: {props.correct_answers}</h3>
                <h3>Incorrect Answers: {props.incorrect_answers}</h3>
            </div>
        </  >
    )
}


export default ScoreBoard;
