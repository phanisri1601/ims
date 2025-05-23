'use client';

import { useState, useEffect } from 'react';
import DotOverlay from './DotOverlay';
import Image from 'next/image';
import '../styles/Home.css';
import Link from 'next/link';

const words = ['DARE', 'VENTURE', 'RISK']; // ✅ moved outside to avoid dependency warning

export default function Home() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 50 : 120;
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setText(prev => prev + currentWord.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <>
      <main className="home-section">
        <div className="home-content">
          <h1 className="glitch-text">WE SHALL</h1>
          <h2 className="glitch-type-text" data-text={text}>
            <span className="typing-word">{text}</span>
          </h2>

          <div className="categories">
            <span>Creative</span>
            <span className="dot">•</span>
            <span>Web</span>
            <span className="dot">•</span>
            <span>Performance</span>
            <span className="dot">•</span>
            <span>Content</span>
          </div>

          <Link href="/aboutus" className="circle-arrow">
            <Image src="/arrow.svg" alt="Arrow" width={24} height={24} />
          </Link>
        </div>
      </main>

      <DotOverlay isOpen={overlayOpen} onClose={() => setOverlayOpen(false)} />
    </>
  );
}
