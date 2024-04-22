import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditForm = () => {
  const [formData, setFormData] = useState({
    pId: '',
    pName: '',
    pPrice: '',
  });

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://p-9x7e.onrender.com/products/delete-product`);
      const data = response.data;
      setFormData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.pName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('https://p-9x7e.onrender.com/products/delete-product', formData);
      alert('Data updated successfully!');
      // Optionally, you can redirect the user or perform other actions after successful update
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Failed to update data. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        P_Id:
        <input type="text" name="pId" value={formData.pId} onChange={handleChange} />
      </label>
      <label>
        P_Name:
        <input type="text" name="pName" value={formData.pName} onChange={handleChange} />
      </label>
      <label>
        P_Price:
        <input type="text" name="pPrice" value={formData.pPrice} onChange={handleChange} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditForm;