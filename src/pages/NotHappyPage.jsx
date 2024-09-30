/* eslint-disable react/no-unescaped-entities */


import { useState, useEffect } from 'react'
import MessageBar from '../components/MessageBar'
import { Helmet } from 'react-helmet-async'

const NotHappyPage = () => {
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
      <title>Hope It Gets Better</title>
      <link rel="icon" href="./src/assets/persevere.png" />
    </Helmet>
    <div className="container">
        <div className="card rounded-lg shadow-lg p-4 bg-white" style={{maxWidth:"400px", width:"100%"}}>
            <h1 className="text-red-400 font-bold mt-3 mb-5">We're sorry that youre not happy 😔</h1>
            <p className='mt-8 mb-5 text-lg font-medium'>Please let me know if theres anything we can do to help improve your mood!</p>
            <ul>
                <li>
                    <p className='font-medium'><span>
                        <a href="https://wa.me/6289699670912" style={{textDecoration:"none"}}>Call</a>
                        </span> or Write your thoughts below 📲</p>
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

export default NotHappyPage