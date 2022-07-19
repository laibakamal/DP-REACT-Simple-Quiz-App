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
                    return(
                        <button key={index} 
                            className="option" 
                            onClick={()=>props.handleAnswerClick(answer)}
                            dangerouslySetInnerHTML={{__html:answer}}>
                        </button>
                    )
                 }) : <div>Loading...</div>
                }
            </div>
        </  >
    )
}

export default QuestionStatements;