import React from "react";

function NavButtons(props) 
{
    return (
        <>

            <div className="nav-buttons">
                <button type="button" id="next" onClick={()=>props.handleNextQuestion()}
                    className="next-question"> Next Question
                </button>

                <button type="button" id="submit" onClick={()=>props.handleSubmitQuestion()}
                    className="submit-question"> Submit Question
                </button>

                <button onClick={()=>props.handleSkipQuestion()}
                    className="submit-question"> Skip Question
                </button>
                
            </div>
        </  >
    )
}

export default NavButtons;