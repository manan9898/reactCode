import React from 'react';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const { phone } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (phone) {
      nextStep();
    } else {
      alert('Please enter phone number');
    }
  };

  return (
    <div>
      <h2>Step 2: Phone Number</h2>
      <form>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phone" value={phone} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleNext}>Next</button>
        <button type="button" onClick={prevStep}>Previous</button>
      </form>
    </div>
  );
};

export default Step2;
