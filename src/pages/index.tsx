import * as React from 'react';
import './index.scss';
import './main.scss';
import type { HeadFC, PageProps } from 'gatsby';
import VideoGallery from '../components/VideoGallery/VideoGallery';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <header style={{ marginBottom: '140px' }}>
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

export const Head: HeadFC = () => <title>Dom Clemmer: Engineer</title>;
