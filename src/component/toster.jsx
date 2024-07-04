import React, { useEffect } from 'react';
import './toster.css'; // Assuming you'll style it separately

const Toast = ({ title, description, position, type }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Auto dismiss after 10 seconds
      // You can adjust the timeout as per your requirement
      // For example, 10000 milliseconds = 10 seconds
      clearTimeout(timer);
    }, 10000);

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <div className={`toast ${type} ${position}`}>
      <div className="toast-header">
        <strong className="mr-auto">{title}</strong>
      </div>
      <div className="toast-body">
        {description}
      </div>
    </div>
  );
};

export default Toast;
