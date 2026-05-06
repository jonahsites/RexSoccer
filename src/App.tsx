import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Builder } from '@builder.io/react';

// Import Firebase context
import { FirebaseProvider } from './contexts/FirebaseContext';

// Import Builder components
import { Navbar } from './components/builder/Navbar';
import { Hero } from './components/builder/Hero';
import { QuoteSection } from './components/builder/QuoteSection';
import { StepSection } from './components/builder/StepSection';
import { MissionSection } from './components/builder/MissionSection';
import { AboutSection } from './components/builder/AboutSection';
import { PricingSection } from './components/builder/PricingSection';
import { LocationsSection } from './components/builder/LocationsSection';
import { ProcessSection } from './components/builder/ProcessSection';
import { LogoCarousel } from './components/builder/LogoCarousel';
import { ContactSection } from './components/builder/ContactSection';
import { Footer } from './components/builder/Footer';
import { TeamPage } from './components/builder/TeamPage';
import { VisionPage } from './components/builder/VisionPage';
import { MerchPage } from './components/builder/MerchPage';
import { LoginPage } from './components/builder/LoginPage';

// --- Error Boundary ---
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handlePageChange = (e: any) => {
      setCurrentPage(e.detail);
      window.scrollTo(0, 0);
    };
    window.addEventListener('changePage', handlePageChange);

    return () => {
      window.removeEventListener('changePage', handlePageChange);
    };
  }, []);

  return (
    <FirebaseProvider>
      <div className="bg-black selection:bg-ice-blue selection:text-black text-white min-h-screen">
        {currentPage !== 'login' && <Navbar />}
        
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.main 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <LogoCarousel />
              <MissionSection backgroundColor="bg-black" />
              <StepSection backgroundColor="bg-black" />
              <AboutSection backgroundColor="bg-black" />
              <QuoteSection 
                quote="1% BETTER EVERYDAY." 
                backgroundColor="bg-black" 
              />
              <ProcessSection backgroundColor="bg-black" />
              <PricingSection backgroundColor="bg-black" />
              <LocationsSection backgroundColor="bg-black" />
              <ContactSection backgroundColor="bg-black" />
              <Footer backgroundColor="bg-black" />
            </motion.main>
          )}

          {currentPage === 'team' && (
            <motion.div 
              key="team"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TeamPage onBack={() => setCurrentPage('home')} backgroundColor="bg-black" />
            </motion.div>
          )}

          {currentPage === 'vision' && (
            <motion.div 
              key="vision"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VisionPage onBack={() => setCurrentPage('home')} backgroundColor="bg-black" />
            </motion.div>
          )}

          {currentPage === 'merch' && (
            <motion.div 
              key="merch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MerchPage onBack={() => setCurrentPage('home')} backgroundColor="bg-black" />
            </motion.div>
          )}

          {currentPage === 'login' && (
            <motion.div 
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoginPage onBack={() => setCurrentPage('home')} backgroundColor="bg-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FirebaseProvider>
  );
}

export default App;
