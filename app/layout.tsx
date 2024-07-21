// app/layout.tsx
import React from 'react';
import './globals.css'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AI BUILDER',
  description: 'AI BUILDER',
};

interface RootLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean; 
  shoWebar?: boolean;  
  showFooter?: boolean;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, showNavbar = false,showFooter=false,shoWebar=false }) => {
  return (
    <html lang="en">
      <body>
        {showNavbar && (
          <nav>
            <Navbar bcolor={undefined} gradientbg={undefined} aicolor={undefined} project={undefined} isTransparent={undefined}/>
          </nav>
        )}
        {shoWebar && <WebsiteNavbar/>}  
        {children}
        {showFooter && <Footer />}
       
      </body>
    </html>
  );
}

export default RootLayout;
