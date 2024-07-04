import React from 'react';

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const { address } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (address) {
      nextStep();
    } else {
      alert('Please enter address');
    }
  };

  return (
    <div>
      <h2>Step 3: Address</h2>
      <form>
        <div>
          <label>Address:</label>
          <textarea name="address" value={address} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleNext}>Next</button>
        <button type="button" onClick={prevStep}>Previous</button>
      </form>
    </div>
  );
};

export default Step3;
