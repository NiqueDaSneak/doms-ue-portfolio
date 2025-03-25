import React, { useState, useEffect, Suspense } from 'react';
import BakeryVideo from '../../assets/BakeryScene.mp4';
import CarVideo from '../../assets/CarScene.mp4';
import SplineVideo from '../../assets/ai-car-spline.mp4';
import CarSceneAudio from '../../assets/car-scene-audio.mp3';
import BakeryAudio from '../../assets/bakery-audio.mp3';

const VideoGallery = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'AI Cars Following Splines',
      description: 'This is video 2',
      video: SplineVideo,
    },
    {
      id: 3,
      title: 'Car Scene',
      description: 'This is video 2',
      video: CarVideo,
      audio: CarSceneAudio,
    },
    {
      id: 2,
      title: 'Bakery Introduction',
      description: 'This is video 1',
      video: BakeryVideo,
      audio: BakeryAudio,
    },
  ]);

  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <React.Suspense key={video.id} fallback={<div>Loading...</div>}>
          <section className="video-section">
            <span className="video-title">{video.title}</span>
            {video.audio && (
              <audio id={`audio-${video.id}`} controls src={video.audio} />
            )}
            <video controls className="video-element">
              <source src={video.video} type="video/mp4" />
            </video>
          </section>
        </React.Suspense>
      ))}
    </div>
  );
};

export default VideoGallery;
