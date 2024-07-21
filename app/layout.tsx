import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebsiteNavbar from './mainapp/components/Navbar';
import './globals.css';

// export const metadata = {
//   title: 'AI BUILDER',
//   description: 'AI BUILDER',
// };

interface RootLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean; 
  showWebsiteNavbar?: boolean;  
  showFooter?: boolean;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, showNavbar = false, showFooter = false, showWebsiteNavbar = false }) => {
  return (
    <html lang="en">
      <body>
        {showNavbar && (
          <nav>
            <Navbar bcolor={undefined} gradientbg={undefined} aicolor={undefined} project={undefined} isTransparent={undefined}/>
          </nav>
        )}
        {showWebsiteNavbar && <WebsiteNavbar />}  
        {children}
        {showFooter && <Footer />}
      </body>
    </html>
  );
}

export default RootLayout;
