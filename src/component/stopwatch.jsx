import React, { useState, useRef } from 'react';
import './stopwatch.css'; // Import CSS for styling

const Stopwatch = () => {
  const [timer, setTimer] = useState(0); // Timer value in milliseconds
  const [isRunning, setIsRunning] = useState(false); // Flag to track if the stopwatch is running
  const intervalRef = useRef(null); // Reference to interval

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 10); // Increase timer every 10 milliseconds
      }, 10);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimer(0);
  };

  // Convert timer value (milliseconds) to HH:MM:SS format
  const formatTime = () => {
    const totalSeconds = Math.floor(timer / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((timer % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
