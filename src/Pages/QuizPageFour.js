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
          <p>Type a <span className='font-bold text-[18px]'> person, place,</span> or <span className='font-bold text-[18px]'> thing</span> to complete each sentence.</p>
  <p className="text-base font-bold text-[14px] mt-1">
  Example: The baby is crying.
  </p>
</div>




          {/* Question List */}
          <div className="flex pl-[100px]  px-4 py-12">
            <div className="flex flex-col qusetion-font space-y-4 text-gray-700 max-w-xl w-full text-start">
      

              {/* Questions */}
              <div className="space-y-3">
                {[
                  "The ___ gave us homework to complete. (person)",
                  "I saw a swan swimming in the ___. (place)",
                  "My favourite ___ is chocolate cake. (thing)",
                  "We visited the ___ to see animals. (place)",
                  "The ___ ran the fastest in the race. (person)",
                  "I packed my ___ in my school bag. (thing)"
                ].map((question, index) => {
                  const parts = question.split('___');
                  const isCorrect =
                    checked &&
                    answers[index].trim().toLowerCase() === correctAnswers[index];
                  const isWrong =
                    checked &&
                    answers[index].trim().length > 0 &&
                    answers[index].trim().toLowerCase() !== correctAnswers[index];

                  return (
                    <p key={index}>
                      {parts[0]}
                      <input
                        type="text"
                        value={answers[index]}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className={`border-b-2 mx-1 px-1 min-w-[80px] outline-none ${
                          isCorrect
                            ? 'border-green-500 text-green-600 font-semibold'
                            : isWrong
                            ? 'border-red-500 text-red-600 font-semibold'
                            : 'border-orange-400'
                        }`}
                      />
                      {parts[1]}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

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

      {/* Footer */}
      <div className="w-full">
        <img src="/Group 21.png" alt="Footer Decoration" className="w-full object-cover h-[60px]" />
      </div>
    </div>
  );
};

export default QuizPageFour;


