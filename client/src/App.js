import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Lina from './pages/LINA';
import Unity from './pages/Unity';
import Projects from './pages/Projects';
import Investing from './pages/Investors';

// Import project detail pages
import TiaasPage from './pages/capabilities/Tiaas';
import XdrPage from './pages/capabilities/Xdr';
import BlacklockPage from './pages/capabilities/Blacklock';
import Underwater from './pages/capabilities/Underwater';
import RoadmapPage from './pages/Roadmap';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/projects" element={
          <Layout>
            <Projects />
          </Layout>
        } />

<Route path="/Lina" element={
          <Layout>
            <Lina />
          </Layout>
        } />

<Route path="/unity" element={
          <Layout>
            <Unity />
          </Layout>
        } />
        
        <Route path="/investors" element={
          <Layout>
            <Investing />
          </Layout>
        } />

        {/* Capabilities Routes */}
        <Route path="/capabilities/tiaas" element={
          <Layout>
            <TiaasPage />
          </Layout>
        } />
        <Route path="/capabilities/xdr" element={
          <Layout>
            <XdrPage />
          </Layout>
        } />
        <Route path="/capabilities/blacklock" element={
          <Layout>
            <BlacklockPage />
          </Layout>
        } />
        <Route path="/capabilities/underwater" element={
          <Layout>
            <Underwater />
          </Layout>
        } />
        <Route path="/roadmap" element={
          <Layout>
            <RoadmapPage />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <ContactPage />
          </Layout>
        } />
        
        <Route path="*" element={
          <Layout>
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
              <p className="text-gray-300">The page you are looking for does not exist.</p>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;