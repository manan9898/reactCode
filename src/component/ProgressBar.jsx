import React from 'react';
import './ProgressBar.css'; // Assuming you'll style it separately

const ProgressBar = ({ currentStep }) => {
  const progress = (currentStep / 5) * 100; // Calculate progress percentage

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>{progress}%</div>
    </div>
  );
};

export default ProgressBar;
