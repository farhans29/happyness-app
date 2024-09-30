/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { useNavigate } from 'react-router-dom';

const MessageBar = ({ name, score }) => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send name, happiness, and message to the API

    // axios.post('http://localhost:8000/api/v1/happy/create', 
    axios.post('https://smileapi.dumm.my.id/api/v1/happy/create',
      {
      name: name, // Passed from HappyPage
      score: score, // Passed from HappyPage
      message: message, // User input from MessageBar
    }).then(() => {
      alert('Message sent successfully')
      navigate('/');
      // console.log('Data sent successfully:', response.data);

    }).catch(error => {
      console.error('Error sending data:', error);

    });
  };

  return (
    <div className='mt-3 mb-5'>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          id="message" 
          rows="4" 
          className="mb-6 block p-2.5 w-full text-sm 
            text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
            focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Write your thoughts here..."
        ></textarea>
        <button type='submit' className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default MessageBar;
