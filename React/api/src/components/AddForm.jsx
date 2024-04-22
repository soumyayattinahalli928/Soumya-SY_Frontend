import React, { useState } from 'react';
import axios from 'axios';

const AddForm = () => {
  const [formData, setFormData] = useState({
    pName: '',
    pPrice: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://p-9x7e.onrender.com/products/delete-product', formData);
      alert('Data added successfully!');
      // Optionally, you can redirect the user or perform other actions after successful addition
    } catch (error) {
      console.error('Error adding data:', error);
      alert('Failed to add data. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" name="pName" value={formData.pName} onChange={handleChange} />
      </label>
      <label>
        Product Price:
        <input type="text" name="pPrice" value={formData.pPrice} onChange={handleChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;