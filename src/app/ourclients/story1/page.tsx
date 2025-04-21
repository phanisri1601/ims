import React from 'react';
import Link from 'next/link';
import '../../../styles/stories.css';

const Story1 = () => {
  return (
    <div className="storyPage">
      <div className="storyLeftImage">
        <img src="/creative_sec.webp" alt="Story Visual" />
      </div>
      <div className="storyContent">
        <h1>Images vs Video vs GIFs – Which Should I Choose?</h1>
        <p>This is where the full story content goes...</p>
        <Link href="/Ourclients">
          <div className="backButton">← Back to Stories</div>
        </Link>
      </div>
    </div>
  );
};

export default Story1;
