import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/home');
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white">
      {/* Top Bar */}
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
        <h2 className="text-2xl font-bold text-black">NOUN</h2>
      </div>

      {/* Video Section */}
      <div className="w-full px-6 py-6">
        <video
          className="w-full h-auto aspect-video"
          controls
        >
          <source src="/final blizz & seal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      {/* Buttons */}
      <div className="flex justify-center pt-6 gap-4 pb-8">
        <button className="border-2 border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-lg">
          PLAY AGAIN
        </button>
        <button onClick={handleNext} className="bg-blue-400 text-white font-semibold py-2 px-6 rounded-lg">
          WORK BOOK
        </button>
      </div>

      {/* Footer Image */}
      <div className="w-full ">
        <img src="/Group 21.png" alt="Ice Decoration" className="w-full" />
      </div>
    </div>
  );
};

export default VideoPage;

