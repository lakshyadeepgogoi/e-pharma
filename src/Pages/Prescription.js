// components/PrescriptionUpload.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const PrescriptionUpload = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('prescription', file);
      formData.append('userId', '66733314896f8bcbf072069a'); // Replace with actual user ID

      try {
        const response = await axios.post('http://localhost:4000/api/prescription/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,

          },
        });
        console.log(response);


        if (response.data.success) {
          toast.success('Prescription uploaded successfully!');
          navigate('/');
        } else {
          toast.error('Failed to upload prescription');
        }
      } catch (error) {
        toast.error('An error occurred while uploading the prescription');
        console.log(error)
      }
    } else {
      toast.error('Please select a file to upload');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Upload Prescription</h2>
        <form onSubmit={handleUpload}>
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4 border border-gray-300 p-2 w-full rounded"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionUpload;
