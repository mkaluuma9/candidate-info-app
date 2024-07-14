import React, { useState } from 'react';
import axios from 'axios';

const CandidateForm = () => {
  const [candidate, setCandidate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    callTimeInterval: '',
    linkedInUrl: '',
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
      console.log(candidate)
      const response = await axios.post('http://localhost:3001/api/candidates/create', candidate);
      console.log(response);
      console.log(response.data);
      console.log(response.data.message);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input name="firstName" value={candidate.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name</label>
          <input name="lastName" value={candidate.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={candidate.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number</label>
          <input name="phoneNumber" value={candidate.phoneNumber} onChange={handleChange} />
        </div>
        <div>
          <label>Best Time to Call</label>
          <input name="callTimeInterval" value={candidate.callTimeInterval} onChange={handleChange} />
        </div>
        <div>
          <label>LinkedIn Profile URL</label>
          <input name="linkedInUrl" value={candidate.linkedInUrl} onChange={handleChange} />
        </div>
        <div>
          <label>GitHub Profile URL</label>
          <input name="githubUrl" value={candidate.githubUrl} onChange={handleChange} />
        </div>
        <div>
          <label>Free Text Comment</label>
          <textarea name="freeTextComment" value={candidate.freeTextComment} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default CandidateForm;
