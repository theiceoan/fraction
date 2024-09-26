import React, { useState } from 'react';
import './App.css';
import { Header } from './header/Header';
import { LandingContent } from './landing-content/LandingContent';
import { OurClients } from './our-clients/OurClients';
import { WaitingList } from './waiting-list/WaitingList';
import { WhatWeDo } from './what-we-do/WhatWeDo';

function App() {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  return (
    <div id="app-container">
      <Header openModal={handleOpenModal} />
      <main id='page-wrap'>
        <section id="our-story">
          <LandingContent openModal={handleOpenModal} />
          <WaitingList show={modalShow} onHide={handleCloseModal} />
        </section>
        <section id="our-clients">
          <OurClients openModal={handleOpenModal} />
        </section>
        <section id='what-we-do'>
          <WhatWeDo openModal={handleOpenModal} />
        </section>
      </main>
    </div>
  );
}

export default App;
