import React from 'react';
import './App.css';
import { Header } from './header/Header';
import { LandingContent } from './landing-content/LandingContent';
import { OurClients } from './our-clients/OurClients';

function App() {
  return (
    <div id="app-container">
      <Header />
      <main id='page-wrap'>
        <section id="our-story">
          <LandingContent />
        </section>
        <section id="our-clients">
          <OurClients />
        </section>
      </main>
    </div>
  );
}

export default App;
