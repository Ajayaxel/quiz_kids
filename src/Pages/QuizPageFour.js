import React, { useState } from 'react';
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

  const handleNext = () => {
    // Add navigation to next activity here
    console.log("Navigate to next activity");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navabr questionNumber={4} totalQuestions={4} />

      {/* Main Content */}
      <div className="flex-1 max-w-screen-xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Left side image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/Group 20.png"
            alt="Quiz Illustration"
            className="w-full max-w-md lg:max-w-full h-auto max-h-[730px] object-contain"
          />
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          {/* Top-right image */}
          <div className="flex justify-end">
            <img
              src="/Group 2 (1).png"
              alt="Top Decoration"
              className="w-[156px] h-[94px] object-contain"
            />
          </div>

          {/* Header */}
          <div className="text-start qusetion-font px-2">
            <p className="text-xl font-semibold">
              4. Type a <span className="font-bold qusetion-font">person, place, or thing</span> to complete each sentence.
            </p>
            <p className="text-base font-normal mt-1">
              <span className="font-semibold">Example:</span> <span className="font-bold qusetion-font">The baby</span> is crying.
            </p>
          </div>

          {/* Question List */}
          <ul className="mt-6 qusetion-font space-y-5 text-gray-700 flex flex-col items-end">
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

          {/* Buttons aligned to bottom right */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end items-end mt-auto px-2">
            <button
              onClick={handleReset}
              className="w-full sm:w-[110px] h-[38px] rounded-[10px] border-2 border-sky-400 text-sky-500 font-bold text-sm"
            >
              Try Again
            </button>
            <button
              onClick={handleCheck}
              className="w-full sm:w-[110px] h-[38px] rounded-[10px] border-2 border-sky-400 text-sky-500 font-bold text-sm"
            >
              Check Answer
            </button>
            <button
              onClick={handleNext}
              className="w-full sm:w-[110px] h-[38px] rounded-[10px] bg-green-500 text-white font-bold text-sm"
            >
              Next Activity
            </button>
          </div>
        </div>
      </div>

      {/* Footer - sticks to bottom */}
      <div className="w-full">
        <img src="/Group 21.png" alt="Footer Decoration" className="w-full object-cover h-[60px]" />
      </div>
    </div>
  );
};

export default QuizPageFour;

