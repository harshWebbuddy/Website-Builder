import React, { ReactNode } from 'react';

import './globals.css'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'My Next.js App',
  description: 'A description of my Next.js app',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <nav>
          <Navbar bcolor={undefined} gradientbg={undefined} aicolor={undefined} project={undefined} isTransparent={undefined}/>
        </nav>
        {children}
<Footer/>      </body>
    </html>
  );
}

export default RootLayout;
