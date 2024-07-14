import React, { useState } from 'react';
import axios from 'axios';
import './CandidateForm.css'; 

const CandidateForm = () => {
  const [candidate, setCandidate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    callAvailability: '',
    linkedinUrl: '',
    githubUrl: '',
    freeTextComment: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate({
      ...candidate,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/candidates/create', candidate);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit} className="candidate-form">
      <h1>Apply Now</h1>
        <div className="form-group">
          <label>First Name</label>
          <input name="firstName" value={candidate.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input name="lastName" value={candidate.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" value={candidate.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input name="phone" value={candidate.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Best Time to Call</label>
          <input name="callAvailability" value={candidate.callAvailability} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>LinkedIn Profile URL</label>
          <input name="linkedinUrl" value={candidate.linkedinUrl} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>GitHub Profile URL</label>
          <input name="githubUrl" value={candidate.githubUrl} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Free Text Comment</label>
          <textarea name="freeTextComment" value={candidate.freeTextComment} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};

export default CandidateForm;
