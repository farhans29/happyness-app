/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Homepage = () => {
    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const navigate = useNavigate();

    const handleHappyChange = (event) => {
        setScore(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const scoreValue = parseInt(score); // Parse input as a number

        sessionStorage.setItem('name',name);
        sessionStorage.setItem('score',score);
    
        // Redirect based on input value
        if (scoreValue >= 1 && scoreValue <= 4) {
          navigate('/notHappy');
        } else if (scoreValue === 5) {
          navigate('/neutral');
        } else if (scoreValue >= 6 && scoreValue <= 8) {
          navigate('/notSoHappy');
        } else if (scoreValue >= 9 && scoreValue <= 10) {
          navigate('/happy');
        } 
    };

  return (
    <div>
      <div className='container'>
          <div className='card rounded-lg shadow-lg p-4 bg-white' style={{maxWidth:"400px", margin:"auto"}}>
              <h1 className='text-center font-bold text-green-500 mt-3'>How Happy Are You?</h1>
              <form onSubmit={handleSubmit} >
                  <div className='mb-3 mt-7'>
                  <label htmlFor="name" className='form-label text-xl font-normal'>
                  Whats your name?</label>
                  
                  <input type="text"
                  id="name" 
                  value={name}
                  onChange={handleNameChange}
                  className="mb-3 mt-5 bg-gray-50 border border-gray-300 
                  text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                  focus:border-blue-500 block w-full p-2.5 " placeholder="Your Name"/>
                  </div>
                  
                  <div className='mb-3 mt-5'>
                  <label htmlFor="happiness" className='form-label text-xl font-normal'>
                      On a scale 1 to 10, how happy are you?</label>
                      <input type="number" 
                      id="happiness" 
                      min={1}
                      max={10}
                      value={score}
                      onChange={handleHappyChange}
                      required
                      className="mb-3 mt-5 bg-gray-50 border border-gray-300 
                      text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                      focus:border-blue-500 block w-full p-2.5 " placeholder="10" />
                  </div>
                  <button type='submit' className='btn btn-primary mt-4'>Submit</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Homepage