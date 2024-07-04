import React, { useState, useEffect } from 'react';
import './counter.css'; // Import CSS for styling

const Counter = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setTime({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="counter">
      <div className="time">
        <span>{time.hours.toString().padStart(2, '0')}</span>:
        <span>{time.minutes.toString().padStart(2, '0')}</span>:
        <span>{time.seconds.toString().padStart(2, '0')}</span>
      </div>
      <div className="labels">
        <span className="label">Hours</span>
        <span className="label">Minutes</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default Counter;
