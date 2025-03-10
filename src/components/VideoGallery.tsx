import React, { useState, useEffect, Suspense } from 'react';
import BakeryVideo from '../assets/BakeryScene.mp4';
import CarVideo from '../assets/CarScene.mp4';
import TestAudio from '../assets/audio.mp3';

const VideoGallery = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Bakery Introduction',
      description: 'This is video 1',
      video: BakeryVideo,
      audio: TestAudio,
      //   thumbnail: './video1-thumbnail.jpg',
    },
    {
      id: 2,
      title: 'Car Scene',
      description: 'This is video 2',
      video: CarVideo,
      audio: TestAudio,
      //   thumbnail: './video2-thumbnail.jpg',
    },
    // Add more videos here
  ]);

  const VideoComponent = React.lazy(() => import('./VideoComponent'));

  return (
    <div
      className="video-gallery"
      style={{
        display: 'grid',
        gap: '70px',
      }}
    >
      {videos.map((video) => (
        <React.Suspense key={video.id} fallback={<div>Loading...</div>}>
          <section
            style={{
              display: 'grid',
              gap: '20px',
              gridTemplateRows: 'auto auto auto',
              justifyItems: 'center',
            }}
          >
            <span style={{ fontSize: '16pt', fontWeight: 'bold' }}>
              {video.title}
            </span>
            <audio id={`audio-${video.id}`} controls src={video.audio} />
            <video controls style={{ width: '50%', borderRadius: '50px' }}>
              <source src={video.video} type="video/mp4" />
            </video>
          </section>
        </React.Suspense>
      ))}
    </div>
  );
};

export default VideoGallery;
