/* eslint-disable react/no-unescaped-entities */
import MessageBar from '../components/MessageBar';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';

const HappyPage = () => {
    const [name, setName] = useState('');
    const [score, setScore] = useState('');

    // Get name and happiness from sessionStorage
    useEffect(() => {
        const storedName = sessionStorage.getItem('name');
        const storedScore = sessionStorage.getItem('score');

        if (storedName) setName(storedName);
        if (storedScore) setScore(storedScore);
    }, []);

    return (
        <div>
          <Helmet>
            <title>Yayy You're Happy</title>
            <link rel="icon" href="./src/assets/relaxed.png" />
          </Helmet>
          <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card rounded-lg shadow-lg p-4 bg-white" 
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <h1 className="font-bold text-green-500 mt-3 mb-5">You're feeling happy! 😊</h1>
              <p className='mt-8 mb-5 text-lg'>That's wonderful! Keep spreading the joy and enjoy your day!</p>
              <ul>
                <li>
                  <p className='font-medium'>
                    <span>
                      <a href="https://wa.me/6289699670912" style={{ textDecoration: "none" }}>Call </a>
                    </span> 
                    or Write your thoughts below 🔮
                  </p>
                  {/* Here we use the MessageBar component */}
                  <MessageBar name={name} score={score} />
                </li>
                <li>
                  <a href="/" style={{ textDecoration: "none" }}>Back</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    
}

export default HappyPage