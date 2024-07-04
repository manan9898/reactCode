import React from 'react';

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
  const { occupation } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (occupation) {
      nextStep();
    } else {
      alert('Please select occupation');
    }
  };

  return (
    <div>
      <h2>Step 4: Occupation Selection</h2>
      <form>
        <div>
          <label>Occupation:</label>
          <select name="occupation" value={occupation} onChange={handleChange}>
            <option value="">Select Occupation</option>
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>
        <button type="button" onClick={handleNext}>Next</button>
        <button type="button" onClick={prevStep}>Previous</button>
      </form>
    </div>
  );
};

export default Step4;
