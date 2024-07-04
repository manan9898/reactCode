import React from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const { name, email } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (name && email) {
      nextStep();
    } else {
      alert('Please enter name and email');
    }
  };

  return (
    <div>
      <h2>Step 1: Name and Email</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Step1;
