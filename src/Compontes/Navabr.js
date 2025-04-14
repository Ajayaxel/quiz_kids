import React from 'react';

const Navabr = ({ questionNumber = 1, totalQuestions = 4 }) => {
  return (
    <div>
      <div className="h-10 w-full px-6 flex items-center justify-between text-sm">
        <p className="text-gray-700">Rahul</p>
        <p className="font-bold uppercase text-right">Nouns for person, place or thing</p>
      </div>

      {/* Header */}
      <div
        style={{ backgroundImage: "url('/Frame (2).png')" }}
        className="w-full py-6 px-6 flex items-center justify-between relative bg-cover bg-center"
      >
        <div className="flex items-end space-x-4">
          <img src="/igloo (1) 1.png" alt="Igloo" className="w-12 h-12" />
          <button className="text-black absolute left-2 bottom-1 font-semibold">HOME</button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-black">
          <h1 className="text-lg font-semibold">
            A Noun is a word that names a person, place or thing.
          </h1>
          <div className="flex justify-center gap-4 mt-2 text-sm font-bold">
            <p>DOCTOR <span className="text-xs font-normal">(PERSON)</span></p>
            <p>PARK <span className="text-xs font-normal">(PLACE)</span></p>
            <p>TABLE</p>
            <p>SPOON</p>
            <p>BALL <span className="text-xs font-normal">(THINGS)</span></p>
          </div>
        </div>

        <button className="border-2 border-[#41AABA] text-black font-semibold bg-white px-6 h-[54px] w-[200px] hover:bg-gray-100">
          QUESTION {questionNumber}/{totalQuestions}
        </button>
      </div>
    </div>
  );
};

export default Navabr;
