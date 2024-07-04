import React from 'react';

const Step5 = ({ formData, prevStep,setFormData }) => {
  const { terms } = formData;

  const handleChange = e => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (terms) {
        
      alert(formData.name);
    } else {
      alert('Please accept terms and conditions');
    }
  };

  return (
    <div>
      <h2>Step 5: Terms and Conditions</h2>
      <form onSubmit={handleSubmit}>
        <div className="checkbox-container">
          <input type="checkbox" name="terms" checked={terms} onChange={handleChange} />
          <label>Accept terms and conditions</label>
        </div>
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Step5;
