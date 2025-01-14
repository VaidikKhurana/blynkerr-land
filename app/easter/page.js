"use client"
// pages/index.js
import Head from 'next/head'
import { useState } from 'react'

const riddles = [
  {
    question: "What has an eye but cannot see?",
    answer: "A needle"
  },
  {
    question: "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?",
    answer: "A map"
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps"
  }
];

export default function page() {
  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = riddles[currentRiddle].answer.toLowerCase();
    setIsCorrect(userAnswer.toLowerCase() === correctAnswer);
  };

  const handleNextRiddle = () => {
    if (currentRiddle < riddles.length - 1) {
      setCurrentRiddle(currentRiddle + 1);
      setUserAnswer('');
      setIsCorrect(null);
    }
  };

  return (
    <>
      <Head>
        <title>The Enigma Game</title>
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">The Enigma Game</h1>

        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-white mb-4">{riddles[currentRiddle].question}</p>

          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="border border-gray-700 rounded-md p-2 w-full mb-4" 
              value={userAnswer} 
              onChange={(e) => setUserAnswer(e.target.value)} 
            />

            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>

          {isCorrect !== null && (
            <p className={`text-white mt-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect. Try again!'}
            </p>
          )}

          {currentRiddle < riddles.length - 1 && (
            <button 
              onClick={handleNextRiddle} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mt-4"
            >
              Next Riddle
            </button>
          )}
        </div>
      </main>
    </>
  )
}