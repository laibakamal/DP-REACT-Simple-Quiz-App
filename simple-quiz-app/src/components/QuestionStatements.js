import React from "react";

function QuestionStatements(props) 
{
    return (
        <>
            <div className="question-statement">
                <h3 dangerouslySetInnerHTML={{__html:props.data.question}}></h3>
            </div>
            <div className="question-options">
                { props.data.answers? props.data.answers.map((answer, index) => 
                 {
                    const setAnswerColors = props.showCorrectAnswer ? (
                        props.data.correct_answer === answer ? "green-button" : "red-button"
                    ) : "";

                    return(
                        <button key={index} 
                            className={`option ${setAnswerColors}`}
                            onClick={()=>props.handleAnswerClick(answer)}
                            dangerouslySetInnerHTML={{__html:answer}}>
                        </button>
                    )
                 }) : <div>Loading...</div>
                }
            </div>

            {
                props.showCorrectAnswer &&(
                    <button onClick={()=>props.handleNextQuestion()}
                    className="next-question"> Submit Question </button>
                )
            }
        </  >
    )
}

export default QuestionStatements;