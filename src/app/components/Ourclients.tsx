'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Importing Next.js Image
import '../styles/Ourclients.css';
import '@/app/styles/stories.css';

const Ourclients = () => {
  return (
    <div className="container">
      <div className="content">

        {/* LEFT IMAGE + CONTENT */}
        <div className="leftSection">
          <div className="leftContent">
            <h1 className="heading">Our Stories</h1>
            <p className="description">
              Everyone has a story to tell. Here is ours.
              Learn more about Digital Advertising. Learn more about Audento Digital.
            </p>
          </div>
        </div>

        {/* RIGHT STORY CARDS ONLY */}
        <div className="ourClientsRightSection">
          <div className="ourClientsRightCards">
            {/* Story 1 */}
            <div className="storyCard">
              <div className="tag">Latest</div>
              <div className="cardText">Images vs Video vs GIFs – Which Should I choose?</div>
              <Link href="/ourclients/story1">
                <div className="arrowCircle">
                  <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
                </div>
              </Link>
            </div>

            {/* Story 2 */}
            <div className="storyCard">
              <div className="tag">Latest</div>
              <div className="cardText">Upgrade your brand with these 5 social media tools</div>
              <Link href="/ourclients/story2">
                <div className="arrowCircle">
                  <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
                </div>
              </Link>
            </div>

            {/* Story 3 */}
            <div className="storyCard">
              <div className="tag">Latest</div>
              <div className="cardText">What the future looks like for content marketing?</div>
              <Link href="/ourclients/story3">
                <div className="arrowCircle">
                  <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Ourclients;
