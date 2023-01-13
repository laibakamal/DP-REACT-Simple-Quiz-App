import React from "react";
import { useState, useEffect } from "react";

function Timer(props) {
  const initialMinutes = props.initialMinutes;
  const initialSeconds = props.initialSeconds;

  //initializing "minutes" and "seconds" states with the props.
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    //IF USER SOLVES THE QUESTION BEFORE TIMEOUT:-
    //whenever user presses next question button before the timeout,
    //reset the timer. Also, to display next question on click
    //of next question button is dealt in nav buttons component.
    document.getElementById("next").onclick = () => {
      setMinutes(0);
      setSeconds(10);
    };

    //IF USER SKIPS THE QUESTION BEFORE TIMEOUT:-
    //whenever user presses skip question button before the timeout,
    //reset the timer. Also, to display next question on click
    //of skip question button is dealt in nav buttons component.
    document.getElementById("skip").onclick = () => {
      setMinutes(0);
      setSeconds(10);
    };

    //setInterval() function is used to set a delay for functions
    //that are executed again and again, such as a timer. the first
    //param of setInterval() is the function to be executed, and the
    //second param is the time in milliseconds.
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      //if a minute has passed
      if (seconds === 0) {
        setSeconds(10);
        setMinutes(0);
        props.handleSkipQuestion();
        //if timer has expired, reset the timer
        if (minutes === 0) 
        {

        }
        //else decrement minute
        else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      //clearInterval() function in javascript clears the
      //interval which has been set by setInterval()
      //function before that.
      clearInterval(myInterval);
    };
  });

  //rendering the timer
  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <h2 className="timer">
          {" "}
          Time Left: 0:00
        </h2>
      ) : (
        <h2 className="timer">
          {" "}
          Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      )}
    </div>
  );
}

export default Timer;
