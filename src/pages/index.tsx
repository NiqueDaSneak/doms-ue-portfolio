import * as React from 'react';
import './index.scss';
import type { HeadFC, PageProps } from 'gatsby';
import VideoGallery from '../components/VideoGallery';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <header style={{ marginBottom: '140px' }}>
        <div className="cube-container">
          <div className="cube">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
            <div className="dot dot-6"></div>
            <div className="dot dot-7"></div>
            <div className="dot dot-8"></div>
            <div className="dot dot-9"></div>
            <div className="dot dot-10"></div>
            <div className="dot dot-11"></div>
            <div className="dot dot-12"></div>
            <div className="dot dot-13"></div>
            <div className="dot dot-14"></div>
            <div className="dot dot-15"></div>
            <div className="dot dot-16"></div>
            <div className="dot dot-17"></div>
            <div className="dot dot-18"></div>
            <div className="dot dot-19"></div>
            <div className="dot dot-20"></div>
            <div className="dot dot-21"></div>
            <div className="dot dot-22"></div>
            <div className="dot dot-23"></div>
            <div className="dot dot-24"></div>
            <div className="dot dot-25"></div>
            <div className="dot dot-26"></div>
            <div className="dot dot-27"></div>
          </div>
        </div>
        <h1>Dominique Clemmer</h1>
        <h3>
          I use Unreal Engine to develop real-time simulations and interactive
          experiences.
        </h3>
      </header>
      <VideoGallery />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
