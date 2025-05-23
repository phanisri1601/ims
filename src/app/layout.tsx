'use client';

import './globals.css';
import { ReactNode, createContext, useContext, useState } from 'react';
import DotOverlay from './components/DotOverlay'; // update path as needed
import Image from 'next/image';
const DotOverlayContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useDotOverlay() {
  return useContext(DotOverlayContext);
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <html lang="en">
      <body>
        <DotOverlayContext.Provider value={{ isOpen, open, close }}>
        <div className="site-logo">
            <Image
              src="/imsolutions.png"
              alt="Company Logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <DotOverlay isOpen={isOpen} onClose={close} />
          {children}
        </DotOverlayContext.Provider>
      </body>
    </html>
  );
}
