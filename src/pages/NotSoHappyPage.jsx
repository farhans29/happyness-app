/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import MessageBar from '../components/MessageBar';
import { Helmet } from 'react-helmet-async';

const NotSoHappyPage = () => {
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
      <title>Take a break</title>
      <link rel="icon" href="./src/assets/hugging_face.png" />
    </Helmet>
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card rounded-lg shadow-lg p-4 bg-white" style={{maxWidth:"400px", width:"100%"}}>
            <h1 className="text-blue-500 font-bold mt-3 mb-5">You're feeling not so happy 😉</h1>
            <p className='mt-8 mb-5 text-lg font-medium'>We hope your day improves soon! Take a break and do something you enjoy.</p>
            <ul>
                <li>
                <p className='font-medium'><span>
                        <a target='_blank' href="https://wa.me/6289699670912" style={{textDecoration:"none"}}>Call</a>
                        </span> or Write your thoughts below 💬</p>
                        <MessageBar name={name} score={score} />
                
                </li>
                <li>
                <a href="/" style={{textDecoration:"none"}}>Back</a >
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default NotSoHappyPage