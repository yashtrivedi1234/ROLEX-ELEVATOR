import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import bgimg from '../assets/rolex/video_rolex.jpg'

const VideoSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black">
      {!playVideo ? (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Background Thumbnail */}
          <img
            src={bgimg}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Play Button */}
          <button
            className="absolute flex items-center justify-center w-20 h-20 bg-white rounded-full text-black text-3xl hover:scale-110 transition-transform"
            onClick={() => setPlayVideo(true)}
          >
            <FaPlay />
          </button>
        </div>
      ) : (
        <ReactPlayer
          url="https://youtu.be/0bTIn8fuHxo" // Replace with your video URL
          playing
          controls
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
        />
      )}
    </div>
  );
};

export default VideoSection;
