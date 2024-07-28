import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CompanyForm = () => {
  const [companyData, setCompanyData] = useState({
    company_name: '',
   description: '',
    department: '',
    location: '',
    CTC: '',
    role: '',
    link: '',
    vacancy: '',
    stipend: '',
    eligibility: '',
    last_date:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/addpost", {
      method: "POST",
      body: JSON.stringify(companyData),
      headers: { "Content-Type": "application/json" },
    });
    const data1 = await res.json();
    // alert(data1.message);
    if (data1.success) {
      
      toast.success(data1.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error(data1.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    console.log(data1.success);
    
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Company Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            name="company_name"
            valuew={companyData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company Description</label>
          <textarea
            type="text"
            name="description"
            value={companyData.companyDescription}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            value={companyData.department}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={companyData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">CTC</label>
          <input
            type="text"
            name="CTC"
            value={companyData.CTC}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <input
            type="text"
            name="role"
            value={companyData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Link</label>
          <input
            type="text"
            name="link"
            value={companyData.link}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Vacancy</label>
          <input
            type="text"
            name="vacancy"
            value={companyData.vacancy}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Stipend</label>
          <input
            type="text"
            name="stipend"
            value={companyData.stipend}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Eligibility Criteria</label>
          <textarea
            name="eligibility"
            value={companyData.eligibilityCriteria}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Date To Apply</label>
          <input
            type="text"
            name="last_date"
            value={companyData.last_date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
