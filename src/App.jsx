import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SectionEngineer from './components/SectionEngineer';
import SectionExplorer from './components/SectionExplorer';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('engineer'); // 'engineer' | 'explorer'

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top overlay for nav on top of 3D hero */}
      <div className="absolute inset-x-0 top-0 z-20">
        <NavBar />
      </div>

      <Hero mode={mode} onModeChange={setMode} />

      {/* Conditional sections based on selected mode */}
      {mode === 'engineer' ? <SectionEngineer /> : <SectionExplorer />}

      <Footer />
    </div>
  );
}

export default App;
