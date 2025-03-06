import React,  { useState, useEffect } from'react';
import useIntersectionObserver from './useIntersectionObserver';
import ReactPlayer from'react-player';

const VideoComponent = ({ video }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver(setIsVisible);

  if (!isVisible) return <div ref={ref} />;

  return (
    <div ref={ref}>
      <ReactPlayer
        url={video.video}
        controls
        lightbox
        width="100%"
        height="100%"
      />
      <div className="video-metadata">
        <h2>{video.title}</h2>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoComponent