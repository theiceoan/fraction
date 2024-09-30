import React, { useState } from 'react';
import './App.css';
import { Header } from './header/Header';
import { LandingContent } from './landing-content/LandingContent';
import { OurClients } from './our-clients/OurClients';
import { WaitingList } from './forms/waiting-list/WaitingList';
import { WhatWeDo } from './what-we-do/WhatWeDo';
import { ContactUs } from './forms/contact-us/ContactUs';
import { Footer } from './footer/Footer';

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
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
