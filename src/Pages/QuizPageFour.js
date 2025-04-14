import React, { useState } from 'react';
import TopBar from '../Compontes/TopBar';
import Navabr from '../Compontes/Navabr';

const QuizPageFour = () => {
  const [answers, setAnswers] = useState(Array(6).fill(''));
  const [checked, setChecked] = useState(false);

  const correctAnswers = ['teacher', 'lake', 'dessert', 'zoo', 'runner', 'lunchbox'];

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleCheck = () => {
    setChecked(true);
  };

  const handleReset = () => {
    setAnswers(Array(6).fill(''));
    setChecked(false);
  };

  return (
    <div className="h-screen flex flex-col font-[Comic Sans MS]" >
      <Navabr questionNumber={4} totalQuestions={4} />
      <div className="flex flex-1 mx-2 my-2 bg-white rounded-br-[40px] relative overflow-y-auto px-6 py-4">
        {/* Star image on the left side */}
        <img src='/Group 2.png' className="absolute top-[10%] left-20" />
        
        {/* Content moved to the right side */}
        <div className="w-full pt-10 max-w-7xl px-12 ml-auto">
          {/* Instructions */}
          <div className="mt-6 flex justify-end">
            <div className="w-2/3">
              <p className="text-lg font-bold text-black">
                4. Type a <span className="text-black font-bold">person</span>, <span className="text-black font-bold">place</span>, or <span className="text-black font-bold">thing</span> to complete each sentence.
              </p>
              <p className="mt-2">Example: The <span className="text-purple-800 font-bold">baby</span> is crying.</p>
            </div>
          </div>

          {/* Challenge Label */}
          <div className="absolute left-44 top-40 bg-orange-400 text-white font-bold px-2 py-1 text-sm transform rotate-[20deg] shadow-lg rounded-full">
            Challenge!
          </div>

          {/* Sentences */}
          <ul className="mt-6 space-y-5 text-gray-700 flex flex-col items-end">
            {[
              'The _____ gave us homework to complete. (person)',
              'I saw a swan swimming in the _____. (place)',
              'My favourite _____________ is chocolate cake. (things)',
              'We visited the _______ to see animals. (place)',
              'The _______ ran the fastest in the race. (person)',
              'I packed my _______ in my school bag. (thing)'
            ].map((sentence, idx) => {
              const parts = sentence.split('_____');
              return (
                <li key={idx} className="text-base flex items-center gap-2 w-2/3">
                  <span className="font-bold mr-2">{String.fromCharCode(97 + idx)}.</span>
                  <span>{parts[0]}</span>
                  <input
                    type="text"
                    className="border-b-4 border-yellow-300 bg-transparent w-40 focus:outline-none px-1 text-center text-black"
                    value={answers[idx]}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    disabled={checked}
                  />
                  <span>{parts[1]}</span>
                  {checked && (
                    <span className={`ml-2 text-lg font-bold ${answers[idx].toLowerCase() === correctAnswers[idx] ? 'text-green-600' : 'text-red-500'}`}>
                      {answers[idx].toLowerCase() === correctAnswers[idx] ? '✔' : '✗'}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Buttons - now aligned to the right */}
          <div className="absolute bottom-4 right-10 flex gap-4">
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-lg border-2 border-cyan-400 text-cyan-500 font-bold bg-white hover:bg-cyan-100"
            >
              Try Again
            </button>
            <button
              onClick={handleCheck}
              className="px-6 py-2 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600"
            >
              Next Worksheet
            </button>
          </div>
        </div>
        
      
      </div>
      <div className="w-full">
        <img src="/Group 21.png" alt="Ice Decoration" className="w-full" />
      </div>
    </div>
  );
};

export default QuizPageFour;