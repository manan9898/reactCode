import React, { useState } from 'react';
import Step1 from './component/step1';
import Step2 from './component/step2';
import Step3 from './component/step3';
import Step4 from './component/step4';
import Step5 from './component/step5';
import './App.css'; // Assuming you'll style it separately
import ProgressBar from './component/ProgressBar';
import Counter from './component/timer';
import Stopwatch from './component/stopwatch';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    terms: false
  });
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <><Stopwatch/></>
  );
};

export default App;
