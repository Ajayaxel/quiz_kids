import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuizPageTwo() {
    const navigate = useNavigate();
    const handleNext = () => navigate('/quizpagethree');
    const handlePrevious = () => navigate('/quizpageone');

    const wordCategories = {
        'teacher': 'People',
        'girl': 'People',
        'river': 'Places',
        'castle': 'Places',
        'playground': 'Places',
        'table': 'Things',
        'ball': 'Things',
        'train': 'Things',
        'flower': 'Things',
        'bird': 'Things'
    };

    const [draggedItems, setDraggedItems] = useState({ People: [], Places: [], Things: [] });
    const [remainingWords, setRemainingWords] = useState([
        'table', 'river', 'ball', 'teacher', 'castle',
        'train', 'girl', 'playground', 'flower', 'bird'
    ]);
    const [wordStatus, setWordStatus] = useState({});

    const handleDragStart = (e, word) => {
        e.dataTransfer.setData('word', word);
    };

    const handleDragOver = (e) => e.preventDefault();

    const handleDrop = (e, category) => {
        e.preventDefault();
        const word = e.dataTransfer.getData('word');

        for (const cat in draggedItems) {
            if (draggedItems[cat].includes(word)) return;
        }

        setRemainingWords(prev => prev.filter(w => w !== word));
        const isCorrect = wordCategories[word] === category;

        setWordStatus(prev => ({ ...prev, [word]: isCorrect }));
        setDraggedItems(prev => ({
            ...prev,
            [category]: [...prev[category], word]
        }));
    };

    return (
        <div className="h-screen overflow-hidden bg-white flex flex-col font-sans">
            {/* Top Bar */}
            <div className="h-10 w-full px-6 flex items-center justify-between text-sm">
                <p className="text-gray-700">Rahul</p>
                <p className="font-bold uppercase text-right text-[13px] md:text-base">Nouns for person, place or thing</p>
            </div>

            {/* Header */}
            <div
                style={{ backgroundImage: "url('/Frame (2).png')" }}
                className="w-full py-6 px-6 flex items-center justify-between relative bg-cover bg-center"
            >
                <div className="flex items-end space-x-4">
                    <img src="/igloo (1) 1.png" alt="Igloo" className="w-10 h-10 sm:w-12 sm:h-12" />
                    <button className="text-black absolute left-2 bottom-1 font-semibold">HOME</button>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-black max-w-[90%]">
                    <h1 className="text-base sm:text-lg font-semibold">
                        A Noun is a word that names a person, place or thing.
                    </h1>
                    <div className="flex justify-center flex-wrap gap-2 mt-2 text-sm font-bold">
                        <p>DOCTOR <span className="text-xs font-normal">(PERSON)</span></p>
                        <p>PARK <span className="text-xs font-normal">(PLACE)</span></p>
                        <p>TABLE</p>
                        <p>SPOON</p>
                        <p>BALL <span className="text-xs font-normal">(THINGS)</span></p>
                    </div>
                </div>
                <button className="hidden sm:block border-2 border-[#41AABA] text-black font-semibold bg-white px-4 md:px-6 h-[40px] md:h-[54px] w-[140px] md:w-[200px] hover:bg-gray-100 text-xs sm:text-base">
                    QUESTION 2/4
                </button>
            </div>

            {/* Main Section */}
            <div className="flex-1 flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-20 py-6 overflow-y-auto gap-6">
                {/* Left Image */}
                <div className="flex w-full lg:w-1/2 flex-col items-center justify-center relative">
                    <img
                        src="/Group 20.png"
                        alt="Polar Bear"
                        className="w-full max-w-[500px] md:max-w-[600px] h-auto object-contain"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 text-center">
                    <p className="text-sm py-2 font-[Sassoon Primary Std]">
                        2. Read the 10 words below. Drag each word into the correct box:{" "}
                        <strong>People</strong>, <strong>Places</strong> or <strong>Things</strong>.
                    </p>

                    {/* Draggable Words */}
                    <div className="flex flex-col items-center gap-4 mb-6">
                        {[0, 5].map((start, i) => (
                            <div key={i} className='border border-gray-300 rounded-full py-2 px-6 inline-block max-w-max'>
                                <p className='text-gray-700 flex flex-wrap gap-2 justify-center'>
                                    {remainingWords.slice(start, start + 5).map((word, index) => (
                                        <span
                                            key={word}
                                            draggable
                                            onDragStart={(e) => handleDragStart(e, word)}
                                            className="cursor-grab inline-block mx-1"
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Drop Zones */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-6">
                        {['People', 'Places', 'Things'].map((category, i) => {
                            const bgColor = {
                                People: 'bg-[#eaf9fc]',
                                Places: 'bg-[#e8e9f0]',
                                Things: 'bg-[#fff7ec]'
                            }[category];

                            const labelColor = {
                                People: 'bg-cyan-500',
                                Places: 'bg-[#1f1b52]',
                                Things: 'bg-[#fbbd3c]'
                            }[category];

                            return (
                                <div
                                    key={i}
                                    className={`w-[200px] h-[300px] p-2 pt-10 ${bgColor} rounded-lg shadow-md relative`}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, category)}
                                >
                                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${labelColor} text-white font-semibold py-1 px-4 rounded-full text-center w-fit`}>
                                        {category}
                                    </div>
                                    <div className="mt-8 flex flex-col gap-2 items-center">
                                        {draggedItems[category].map((word, index) => (
                                            <div
                                                key={index}
                                                className={`py-1 px-3 rounded-full text-sm ${wordStatus[word]
                                                    ? 'bg-green-100 text-green-700 border border-green-500'
                                                    : 'bg-red-100 text-red-700 border border-red-500'
                                                    }`}
                                            >
                                                {word}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end px-4 md:px-12 gap-4 md:gap-6 py-4">
                <button
                    onClick={handlePrevious}
                    className="border-2 border-blue-200 px-4 md:px-5 py-2 font-semibold text-sm md:text-base hover:bg-gray-100"
                >
                    PREVIOUS QUESTION
                </button>
                <button
                    onClick={handleNext}
                    className="bg-[#00AEEF] text-white px-5 md:px-9 py-2 font-semibold rounded hover:bg-blue-600 text-sm md:text-base"
                >
                    NEXT QUESTION
                </button>
            </div>
            <div className="w-full">
        <img src="/Group 21.png" alt="Ice Decoration" className="w-full" />
      </div>
        </div>
    );
}

