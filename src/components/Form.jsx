import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        crsname: '',
        email: '',
        age: '',
      });
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
         crsname: '',
          email: '',
          age: '',
        });
      };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" id="crsname" value={formData.crsname} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" id="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Age:
        <input type="number" id="age" value={formData.age} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
      
  )
}

export default Form